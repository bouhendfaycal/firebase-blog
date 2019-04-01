import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import {Parallax} from 'react-scroll-parallax';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom'
import Chip from '@material-ui/core/Chip';
const styles = {
    link: {
        width: '100%',
        justifyContent: 'left',
        borderRadius: '0',
        textDecoration: 'none'
    },
    title: {
        color: '#222',
        fontSize: '24px',
        margin: '  0'
    },
    root: {
        borderRadius: 10,
        backgroundColor: '#fff',
        boxShadow: '0px 0px 51px 0px rgba(0, 0, 0, 0.08), 0px 6px 18px 0px rgba(0, 0, 0, 0.05)',
        transition: 'transform 0.35s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.35s cubic-bezier(0.4,' +
                ' 0, 0.2, 1)',
        display: 'bloc',
        "&:hover": {
            boxShadow: '0px 0px 114px 0px rgba(0, 0, 0, 0.08), 0px 30px 25px 0px rgba(0, 0, 0, 0.05)',
            transform: 'translateY(-5px)'
        }

    },
    media: {
        borderRadius: '10px 10px 0 0',
        width: '100%',
        height: '200px',
        overflow: 'hidden',
        margin: 0
    },

    mediaInner: {
        backgroundSize: '100% auto',
        backgroundPosition: 'center',
        transition: 'transform  2s cubic-bezier(0, 0, 0.2, 1)',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100%',
        "&:hover": {
            transform: 'scale(1.2)'
        }
    },
    img: {

        margin: 'auto',
        display: 'block',
        width: '100%'
    },
    description: {
        margin: '15px 0'
    },
    date: {
        color: '#888',
        fontSize: '12px'

    },
    content: {
        padding: '20px',
        color: '#222'
    },
    chip: {
        height: 20,
        marginLeft: 5,
        fontSize: 12
    }

};

function MediaCard(props) {
    const {classes, post} = props;
    var parts = post
        .date
        .split('-');
    const dateFormated = new Date(parts[0], parts[1] - 1, parts[2]).toDateString();
    return (
        <div className={classes.root}>
            <Link
                to={"/blog/" + encodeURIComponent(post.title) + "-id-" + post.id}
                className={classes.link}>
                <Parallax
                    className={classes.media}
                    offsetYMax={20}
                    offsetYMin={-20}
                    slowerScrollRate
                    tag="figure">
                    {/* <div className={classes.mediaInner} style={{}}></div> */}
                    <img src={post.imageURL} alt={post.title} className={classes.img}/>
                </Parallax>
                <div className={classes.content}>
                    <Typography component="h1" className={classes.title}>
                        {post.title}
                    </Typography>
                    {/* <Typography component="p">
                    {post.description}
                    <br/> {post.date}
                </Typography> */}

                    <div className={classes.description}>
                        {post.description}
                    </div>
                    <div>
                        {post
                            .tags
                            .split(',')
                            .map((tag, index) => (<Chip label={tag} className={classes.chip} key={index}/>))}
                    </div>
                    <div align="right" className={classes.date}>
                        {dateFormated}
                    </div>
                </div>
            </Link>
        </div>
    );
}
MediaCard.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MediaCard);