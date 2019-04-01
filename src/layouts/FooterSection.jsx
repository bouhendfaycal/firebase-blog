import React, {Component} from 'react'
import Grid from '@material-ui/core/Grid';
import HomeStyle from "jss/Home.jsx";
import ContactForm from 'pages/home/sections/SectionContactForm.jsx'
import Icon from '@mdi/react';
import {
    mdiFacebookBox,
    mdiGithubBox,
    mdiLinkedinBox,
    mdiHeart,
    mdiReact,
    mdiFirebase,
    mdiBitbucket,
    mdiPhoneInTalk,
    mdiMaterialUi,
} from '@mdi/js';
import {mdiInstagram} from '@mdi/js';
import {mdiGmail} from '@mdi/js';

import {withStyles} from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';


export class FooterSection extends Component {
    render() {
        const {
            classes,
            children,
            // ...rest
        } = this.props;
        return (
            <div className={classes.footerContainer}>
                <div className={classes.footer}>
                    <Grid container justify="center" className={classes.footerGrid} spacing={0}>
                        <Grid item xs={11} md={4}>
                            <ContactForm/>
                        </Grid>
                        <Grid container item xs={7}>
                            <Grid item xs={12}>

                                <div className={classes.IconContainer}>

                                    <a rel="noopener noreferrer"  target="_blank" href="https://www.facebook.com/Bhn.Faycal" title="facebook">
                                        <IconButton className={classes.buetton} aria-label="facebook">
                                            <Icon path={mdiFacebookBox} size={1.9} color="#3b5999"/>
                                        </IconButton>
                                    </a>
                                    <a
                                        rel="noopener noreferrer"  target="_blank"
                                        href="https://www.instagram.com/faycal_bouhend/"
                                        title="instagram">
                                        <IconButton className={classes.button} aria-label="instagram">
                                            <Icon path={mdiInstagram} size={1.9} color="#e4405f"/>
                                        </IconButton>
                                    </a>
                                    <a rel="noopener noreferrer"  target="_blank" href="mailto://faycal22sba@gmail.com" title="">
                                        <IconButton className={classes.button} aria-label="gmail">
                                            <Icon path={mdiGmail} size={1.9} color="#D44638"/>
                                        </IconButton>
                                    </a>
                                    <a rel="noopener noreferrer"  target="_blank" href="https://github.com/bouhendfaycal" title="github">
                                        <IconButton className={classes.button} aria-label="github">
                                            <Icon path={mdiGithubBox} size={1.9} color="#211F1F"/>
                                        </IconButton>
                                    </a>
                                    <a
                                        rel="noopener noreferrer"  target="_blank"
                                        href="https://bitbucket.org/faycalbouhend/"
                                        title="bitbucket">
                                        <IconButton className={classes.button} aria-label="bitbucket">
                                            <Icon path={mdiBitbucket} size={1.7} color="#0747a6"/>
                                        </IconButton>
                                    </a>
                                    <a
                                        rel="noopener noreferrer"  target="_blank"
                                        href="https://www.linkedin.com/in/fay%C3%A7al-bouhend-357635110/"
                                        title="linkedin">
                                        <IconButton className={classes.button} aria-label="linkedin">
                                            <Icon path={mdiLinkedinBox} size={1.9} color="#0077B5"/>
                                        </IconButton>
                                    </a>
                                    {/* <a rel="noopener noreferrer"  target="_blank" href="tel:+213561090018" title="0561 09 00 18">
                                        <IconButton className={classes.button} aria-label="phone">
                                            <Icon path={mdiPhoneInTalk} size={1.7} color="#51c795"/>
                                        </IconButton>
                                    </a> */}
                                </div>

                            </Grid>

                            <Grid item xs={12}>
                                {children}
                            </Grid>
                        </Grid>
                    </Grid>

                </div>

                <div className={classes.copyRight}>
                    Made with <Icon className={classes.copyRightIcon} path={mdiHeart} size={1} color="red"/> in Algeria, Powered by <Icon
                        className={classes.copyRightIcon}
                        path={mdiReact}
                        size={1}
                        color="#61DBFB"/> and <Icon
                        className={classes.copyRightIcon}
                        path={mdiMaterialUi}
                        size={1}
                        color="#00b0ff"/>, Hosted by <Icon
                        className={classes.copyRightIcon}
                        path={mdiFirebase}
                        size={1}
                        color="#FFA611"/>
                </div>

            </div>
        )
    }
}

export default withStyles(HomeStyle)(FooterSection)
