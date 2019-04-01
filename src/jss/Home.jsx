import typing from 'assets/typing.gif'
const HomeStyle = {
    main: {
        width: '100%',
        minHeight: '800px',
        margin: 'auto',
        boxShadow: '0px 0px 60px 0px rgba(0, 0, 0, 0.2), 0px 6px 18px 0px rgba(0, 0, 0, 0.2)',
        backgroundColor: '#fff',
        borderRadius: '5px',

        padding: '50px 0px',
        color: '#555'
    },
    headerImage: {
        height: '400px'
    },
    mainContainer: {
        backgroundColor: '#eee'
    },

    /*  */
    headerContainer: {
        marginTop: 140,
        textAlign: 'center',
        color: '#fff',
        fontSize: '14px',
        textShadow: '2px 2px 2px rgba(0,0,0,0.4)'
    },
    typingCursor: {
        color: '#fff',
    },
    /*  */
    aboutMeContainer: {
        marginBottom: '80px'
    },

    gradient1: {
        background: '50px 100px no-repeat url("' + typing + '")'
    },
    gradient1Outer: {
        background: 'linear-gradient( 135deg, #ABDCFF 10%, #eef 100%)'
    },
    gradient2: {
        background: 'linear-gradient( 135deg, #eef 10%, #0396FF 100%)'
    },
    gradient2Outer: {
        position: 'relative',
        overflowX: 'hidden',
        overflowY: 'hidden'
    },
    '@keyframes slide': {
        from: {
            transform: 'translate(0, 0)'
        },
        to: {
            transform: 'translate(-1200px, 0)'

        }
    },
    gradient2Inner: {
        position: 'relative',
        animation: 'slide 80s alternate infinite ease-in-out'
    },
    titleSection: {
        fontSize: 50,
        padding: '20px 0 20px 0',
        fontWeight: 'bold'
    },
    titleMedium: {
        color: '#fff',
        padding: '60px 0 180px 0',
        fontWeight: 'bold',
        fontSize: 50,
        textShadow: '1px 1px 5px rgba(0,0,0,0.5)'
    },
    paragraph: {
        fontSize: 18,
        marginBottom: 30,
        padding: 20
    },
    BlogContainer: {
        backgroundColor: '#fafafa',
        paddingTop: '30px'
    },
    footerContainer: {
        backgroundColor: '#eee',
        paddingTop: 80
    },
    footer: {
        background: '#546E7A',
        height: 300,
        width: '100%',
        position: 'relative'
    },
    footerGrid: {

        position: 'absolute',
        bottom: 20
    },
    FormRoot: {
        padding: '30px 30px 60px 30px',
        backgroundColor: '#fff',
        borderRadius: 5,
        boxShadow: '0px 0px 51px 0px rgba(0, 0, 0, 0.08), 0px 6px 18px 0px rgba(0, 0, 0, 0.05)'
    },
    FormElement: {
        marginTop: '10px'
    },
    sendIcon: {
        marginLeft: 10
    },
    formButton: {
        backgroundColor: '#546E7A',
        color: '#fff'
    },
    IconContainer: {
        textAlign: 'center',
        marginTop: 60
    },
    copyRight: {
        padding: 10,
        backgroundColor: '#232d31',
        textAlign: 'center',
        color: '#aaa'
    },
    copyRightIcon: {
        verticalAlign: 'middle'
    },

    '@media (max-width: 800px)': {
        '@global pre': {
            width: '80vw',
            margin: 0,
            padding: 0
        }
    },

    simpleLink: {
        color: '#fff',
        textDecoration: 'none'
    },
    color01: {
        backgroundColor: "rgba(20,20,20,0.2) !important",
        boxShadow: "none",
        padding: "10px 0",
        color: "#FFFFFF"
    },
    color02: {
        color: "#FFFFFF",
        backgroundColor: "#546E7A !important",
        boxShadow: "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(33, 33, 33, 0.46)"
    },

    '@global header': {
        transition: 'all ease 0.3s'
    }

};

export default HomeStyle;
