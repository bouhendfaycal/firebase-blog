import React, {Component} from 'react'
import Grid from '@material-ui/core/Grid';
import Navbar from "components/Navbar.jsx";
import HeaderSection from "layouts/HeaderSection.jsx";
import MainSection from "layouts/MainSection.jsx";
import FooterSection from "layouts/FooterSection.jsx";
import HomeStyle from "jss/Home.jsx";
import AboutMe from 'pages/home/sections/SectionAboutMe.jsx'
import Blog from 'pages/home/sections/SectionBlog.jsx'
import Typing from 'react-typing-animation';
import {withStyles} from '@material-ui/core/styles';

export class Home extends Component {
    componentDidMount = () => {
        window.scrollTo(0, 0);
        document.title = "Fayçal BOUHEND | Personal Blog - Portfolio";

    }

    render() {

        const {
            classes,
        } = this.props;
        return (
            <div>
                <Navbar/>
                <HeaderSection>
                    <Grid container justify="center" spacing={0}>
                        <Grid item xs={12}>
                            <div className={classes.headerContainer}>
                                <Typing speed={75} loop={false} cursorClassName={classes.typingCursor}>
                                    <div>
                                        <h1>Hello<Typing.Delay key={'0'} ms={2000}/>, my name is Fayçal Bouhend,<div></div>
                                        <Typing.Delay key={'1'} ms={2000}/>
                                            <span>i am a web developer
                                            </span>
                                            <Typing.Delay key={'2'} ms={2000}/>
                                            <span>.</span>
                                            <Typing.Delay key={'3'} ms={1000000}/>
                                        </h1>
                                    </div>
                                </Typing>
                            </div>
                        </Grid>
                    </Grid>
                </HeaderSection>

                <MainSection>
                    <AboutMe/>
                    <Blog/>
                </MainSection>

                <FooterSection></FooterSection>

            </div>

        )
    }
}

export default withStyles(HomeStyle)(Home)
