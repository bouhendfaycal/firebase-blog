import React, {Component} from 'react'
import Grid from '@material-ui/core/Grid';
import HomeStyle from "jss/Home.jsx";
import {Parallax} from 'react-scroll-parallax';

import {withStyles} from '@material-ui/core/styles';

export class MainSection extends Component {
    render() {
        const {
            classes,
            children,
        } = this.props;
        return (
            <Grid container justify="center" className={classes.mainContainer}>
                <Grid item sm={11} md={10}>
                <Parallax
                    className={classes.media}
                    offsetYMax={1}
                    offsetYMin={-20}
                    
                    tag="div">
                    <div className={classes.main}>
                        {children}
                    </div>
                </Parallax>

                </Grid>
            </Grid>
        )

    }
}

export default withStyles(HomeStyle)(MainSection)
