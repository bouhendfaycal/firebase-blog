import React, {Component} from 'react'
import MediaCard from "components/MediaCard.jsx"
import Grid from '@material-ui/core/Grid';
import firebase from 'firebase.js';
import CircularProgress from '@material-ui/core/CircularProgress';
export class SectionPostList extends Component {

    constructor() {
        super();
        this.state = {
            posts: [],
            loading: true
        };
    }

    componentDidMount() {
        const postsRef = firebase
            .database()
            .ref('posts');
        postsRef.on('value', (snapshot) => {
            const posts = snapshot.val();
            // console.log(posts)
            const newState = [];
            for (const post in posts) {

                newState.unshift({
                    id: post,
                    title: posts[post].title,
                    description: posts[post].description,
                    imageURL: posts[post].imageURL,
                    date: posts[post].date,
                    tags: posts[post].tags
                });
            }
            this.setState({posts: newState});
            this.setState({loading: false});
        });
    }
    render() {
        return (
            <div
                style={{
                padding: 40,
                width: '100%',
                minHeight: 800
            }}>
                <Grid container justify="center">
                    {this.state.loading && <CircularProgress size={68}/>}
                </Grid>
                <Grid
                    container
                    padding={20}
                    direction="row"
                    justify="center"
                    alignItems="stretch"
                    spacing={40}>
                    {this
                        .state
                        .posts
                        .map((post) => (
                            <Grid item xs={12} sm={12} md={5} key={post.id}>
                                <MediaCard post={post}/>
                            </Grid>
                        ))}
                </Grid>
            </div>
        )
    }
}

export default SectionPostList
