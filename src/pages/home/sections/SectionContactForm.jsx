import React, {Component} from 'react'
// import firebase from 'firebase.js';
import HomeStyle from "jss/Home.jsx";
import {withStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export class ContactForm extends Component {

    constructor() {
        super();
        this.state = {
            loading: true,
            fname: '',
            email: '',
            message: ''
        };
    }
    handleChange = name => event => {
        this.setState({[name]: event.target.value});
    };
    componentDidMount() {
        // const postsRef = firebase     .database()     .ref('posts');
        // postsRef.on('value', (snapshot) => {     const posts = snapshot.val();
        // console.log(posts)     const newState = [];     for (const post in posts) {
        // newState.push({id: post, title: posts[post].title, description:
        // posts[post].description, imageURL: posts[post].imageURL, date:
        // posts[post].date, tags: posts[post].tags});     }     this.setState({posts:
        // newState});     this.setState({loading: false}); });
    }
    render() {
        const {
            classes,
            // props,
        } = this.props;
        return (
            <div className={classes.FormRoot}>
                <h3>Contact</h3>
                <div className={classes.FormElement}>

                    <TextField
                        id="name-field"
                        label="Your Name"
                        name="fname"
                        fullWidth
                        margin="dense"
                        variant="outlined"/>
                </div>
                <div className={classes.FormElement}>

                    <TextField
                        id="email-field"
                        label="Your Email"
                        type="email"
                        name="email"
                        autoComplete="email"
                        fullWidth
                        margin="dense"
                        variant="outlined"/>
                </div>
                <div className={classes.FormElement}>

                    <TextField
                        id="message-field"
                        label="Message"
                        multiline
                        name="message"
                        rows="4"
                        fullWidth
                        margin="dense"
                        variant="outlined"/>
                </div>

                <div className={classes.FormElement}>
                    <Button
                        variant="contained"
                        fullWidth
                        color="secondary"
                        className={classes.formButton}>
                        Send
                    </Button>
                </div>
            </div>
        )
    }
}

export default withStyles(HomeStyle)(ContactForm)