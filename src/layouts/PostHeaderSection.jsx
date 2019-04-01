import React, {Component} from 'react'
import Grid from '@material-ui/core/Grid';
import HomeStyle from "jss/Home.jsx";

import {withStyles} from '@material-ui/core/styles';

export class PostHeaderSection extends Component {
    render() {
        const {
            classes,
            children,
            background,
        } = this.props;
        return (
            <div>

                <Grid container spacing={0}>
                    <Grid
                        item
                        xs={12}
                        className={classes.headerImage}
                        style={{
                        backgroundImage: "url('" + background + "')",
                        backgroundSize : 'cover'
                    }}>
                        {children}
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default withStyles(HomeStyle)(PostHeaderSection)
