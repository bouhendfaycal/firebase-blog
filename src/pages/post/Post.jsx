import React, {Component} from 'react'
import Grid from '@material-ui/core/Grid';
import Navbar from "components/Navbar.jsx";
import PostHeaderSection from "layouts/PostHeaderSection.jsx";
import MainSection from "layouts/MainSection.jsx";
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';
import Prism from "prismjs";
import "jss/prism.css";
import firebase from 'firebase.js';
import FooterSection from "layouts/FooterSection.jsx";
import Chip from '@material-ui/core/Chip';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = {
    headerTitle: {
        margin: '50px 0',
        fontSize: 42
    },
    chips: {
        marginBottom: '20px'
    }
};

export class Post extends Component {
    constructor() {
        super();
        this.state = {
            post: {},
            postContent: '',
            postId: '',
            loading: true
        };
    }

    componentDidMount() {
        window.scrollTo(0, 0)
        const postsRef = firebase
            .database()
            .ref('/posts/')
            .child(this.props.match.params.id);
        postsRef.once('value', (snapshot) => {
            let item = snapshot.val();
            this.setState({post: item, loading: true});
            document.title = "Fayçal BOUHEND | " + item.title;
            this.setState({loading: false});
        });

        const postsContentRef = firebase
            .database()
            .ref('/posts-content/')
            .child(this.props.match.params.id);
        postsContentRef.once('value', (snapshot) => {
            let itemContent = snapshot.val();
            this.setState({postContent: itemContent.content});
            this.setState({loading: false});
            Prism.highlightAll()
        });
    }

    render() {
        const {
            classes,
            // ...rest
        } = this.props;
        return (
            <div>
                <Navbar/>

                <PostHeaderSection background={this.state.post.imageURL}></PostHeaderSection>

                <MainSection>

                    <Grid container justify="center" spacing={0}>
                        <Grid item xs={12} sm={11} md={7}>
                            <Typography variant="h1" align="center" className={classes.headerTitle}>
                                {this.state.post.title}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container justify="center">
                        {this.state.loading && <CircularProgress size={68}/>}
                    </Grid>
                    <Grid container justify="center" spacing={0}>
                        <Grid item xs={10} sm={11} md={7}>
                            <div>
                                <p>{this.state.post.date}</p>
                            </div>
                            <div className={classes.chips}>
                                {(this.state.post.tags)
                                    ? this.state.post.tags.split(',').map((tag, index) => (
                                        <span  key={index}> <Chip label={tag}/> </span>
                                    ))
                                    : ''
}

                            </div>
                            <div
                                dangerouslySetInnerHTML={{
                                __html: this.state.postContent
                            }}></div>
                        </Grid>
                    </Grid>

                </MainSection>
                <FooterSection></FooterSection>
            </div>
        )
    }
}

export default withStyles(styles)(Post)
