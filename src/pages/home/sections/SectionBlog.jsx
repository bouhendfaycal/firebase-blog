import React, {Component} from 'react'
import Grid from '@material-ui/core/Grid';
import classNames from "classnames";
import HomeStyle from "jss/Home.jsx";
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';
import SectionPostList from 'pages/home/sections/SectionPostList.jsx'


export class Blog extends Component {

    render() {

        const {classes} = this.props;
        return (
            <div className={classes.BlogContainer}>
                <Grid container justify="center">
                    <Grid item xs={12}>
                        <Typography
                            variant="h2"
                            align="center"
                            className={classNames(classes.titleSection)}>
                            Blog
                        </Typography>
                    </Grid>
                    <SectionPostList/>

                </Grid>
            </div>
        )
    }
}

export default withStyles(HomeStyle)(Blog)