import React, {Component} from 'react'
import {withStyles} from '@material-ui/core/styles';

const style = {
    '@keyframes fadein': {
        from: {
            opacity: 0
        },
        to: {
            opacity: 1
        }
    },
    container: {
        opacity: 0,
        margin: 10,
        position: 'absolute',
        animation: 'fadein 3s ',
        'animation-fill-mode': 'forwards'

    },

    '@keyframes hover': {
        from: {
            transform: 'translate(0, 0)'
        },
        to: {
            transform: 'translate(0, 60px)'
        }
    },
    icon: {
        height: 70,
        width: 70,
        borderRadius: '50%',
        boxShadow: '0 10px 40px 0 rgba(23,28,33,.43), 0 3px 13px 0 rgba(23,28,33,.1), inset 0px -10px 30px -10px  #888',
        padding: 12,
        backgroundColor: '#fff',
        animation: 'hover 8s alternate infinite ease-in-out'
    },
    img: {
        height: '100%',
        width: '100%',
        margin : 0,
        padding : 0
    }
};

export class FloatingIcon extends Component {
    state = {
        hovering: false,
        posY: Math.floor(Math.random() * 200) - 10,
        posX: Math.floor(Math.random() * 1200),
        delay: Math.random() * 15
    };

    /*
    getRandom = (axis) => {
        let newDiff = ((Math.floor(Math.random() * 50)) + 150);

        if (axis === 'x') {
            if (this.state.posX + newDiff > Boundright)
                newDiff = newDiff * -1;
            else if (this.state.posX - newDiff > Boundleft)
                newDiff = newDiff * ((Math.random() - 0.5) * 2);
            return newDiff
        } else if (axis === 'y') {
            if (this.state.posY + newDiff > Boundbottom)
                newDiff = newDiff * -1;
            else if (this.state.posY - newDiff > Boundtop)
                newDiff = newDiff * ((Math.random() - 0.5) * 2);

            return newDiff

        }
    }

    componentDidMount = () => {
        this.setState({
            posX: this.state.posX + this.getRandom('x'),
            posY: this.state.posY + this.getRandom('y')
        });
        setInterval(() => {
            this.setState({
                posX: this.state.posX + this.getRandom('x'),
                posY: this.state.posY + this.getRandom('y')
            });
        }, this.props.speed);
    } */

    render() {
        const {classes, src} = this.props;
        return (
            <div
                className={classes.container}
                style={{
                left: this.state.posX,
                top: this.state.posY,
                animationDelay: this.state.delay + 's'
            }}>

                <div
                    className={classes.icon}
                    style={{
                    animationDelay: this.state.delay + 's'
                }}>

                    
                    <img src={src} className={classes.img} alt="icon" />
                </div>
            </div>
        )
    }
}

export default withStyles(style)(FloatingIcon);
