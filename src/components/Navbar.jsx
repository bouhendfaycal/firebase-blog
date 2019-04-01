import React, {Component} from 'react'

import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom'
import HomeStyle from "jss/Home.jsx";

export class Navbar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            mobileOpen: false
        };

        this.headerColorChange = this
            .headerColorChange
            .bind(this);
    }

    componentDidMount() {
        this.headerColorChange()
        window.addEventListener("scroll", this.headerColorChange);
        if (this.props.changeColorOnScroll) {}
    }

    headerColorChange() {
        const {classes} = this.props;
        const windowsScrollTop = window.pageYOffset;
        if (windowsScrollTop > 250) {
            document
                .body
                .getElementsByTagName("header")[0]
                .classList
                .remove(classes.color01);
            document
                .body
                .getElementsByTagName("header")[0]
                .classList
                .add(classes.color02);
        } else {
            document
                .body
                .getElementsByTagName("header")[0]
                .classList
                .add(classes.color01);
            document
                .body
                .getElementsByTagName("header")[0]
                .classList
                .remove(classes.color02);
        }
    }

    render() {

        const {classes} = this.props;
        return (
            <div>
                <AppBar className={classes.color01} position="fixed">
                    <Toolbar variant="dense">
                        <Typography variant="h6" color="inherit">
                            <Link className={classes.simpleLink} to={"/"}>
                                Fayçal BOUHEND
                            </Link>
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}
Navbar.defaultProp = {
    color: "white"
};
Navbar.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(HomeStyle)(Navbar);