import Home from 'pages/home/Home';
import Post from 'pages/post/Post';

var indexRoutes = [
    {
        path: "/",
        name: "Home",
        component: Home
    }, {
        path: "/blog/(.*-id-):id",
        name: "Post",
        component: Post
    }

];

export default indexRoutes;