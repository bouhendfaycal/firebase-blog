import React, {Component} from 'react'
import Grid from '@material-ui/core/Grid';
import classNames from "classnames";
import FloatingIcon from 'components/FloatingIcon.jsx'
import HomeStyle from "jss/Home.jsx";
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';

export class AboutMe extends Component {
    importAll = (r) => {
        let images = {};
        r
            .keys()
            .map((item) => {
                return images[item.replace('./', '')] = r(item);
            });
        return images;
    }
    render() {
        const images = this.importAll(require.context('assets/icons/', false, /\.(png|jpe?g|svg)$/));
        const icons = Object.values(images)

        const {classes} = this.props;
        return (
            <div className={classes.aboutMeContainer}>
                <Grid container justify="center">
                    <Grid item xs={12}>
                        <Typography
                            variant="h2"
                            align="center"
                            className={classNames(classes.titleSection)}>
                            About me
                        </Typography>
                    </Grid>
                    <Grid item container xs={12} sm={12} alignItems="center">
                        <Grid item xs={12} md={6}>
                            <div className={classes.gradient1Outer}>
                                <Typography
                                    variant="h3"
                                    align="center"
                                    className={classNames(classes.gradient1, classes.titleMedium)}>
                                    Who am i
                                </Typography>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <div align="center" className={classes.paragraph}>
                                I am a developer from Algeria with a passion for web technologies
                            </div>
                        </Grid>
                    </Grid>
                    <Grid item container xs={12} sm={12} alignItems="center" direction={"row-reverse"}>
                        <Grid item xs={12} md={6}>
                            <div className={classes.gradient2Outer}>
                                <div className={classes.gradient2Inner}>
                                    {icons.map(icon => <FloatingIcon key={icon} src={icon}/>)}
                                </div>

                                <Typography
                                    variant="h3"
                                    align="center"
                                    className={classNames(classes.gradient2, classes.titleMedium)}>
                                    What I do
                                </Typography>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <div align="center" className={classes.paragraph}>
                                Mainly dynamic and responsive web sites, web applications, Android / hybrid
                                apps, WordPress themes / plugins, Odoo modules …
                                <br/><br/>every project has its own requirement, and I take every new project as
                                    a new challenge. Take a look at my blog and see my work, feel free to contact me
                                    about anything, new project, collaboration, or just to say hi 😊
                            </div>
                        </Grid>

                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default withStyles(HomeStyle)(AboutMe)