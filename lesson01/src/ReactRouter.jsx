/* LEARNING REACT ROUTER FOR FULL APPLICATION */
import Header from './RHeader.jsx';
import Nav from './Nav.jsx';
import Footer from './RFooter.jsx';
import Home from './Home.jsx';
import NewPost from './NewPost.jsx';
import PostPage from './PostPage.jsx';
import EditPost from './EditPost.jsx';
import About from './About.jsx';
import Missing from './Missing.jsx';
import { useEffect } from 'react';
import useAxiosFetch from './hooks/useAxiosFetch.js';
import { Route, Switch } from 'react-router-dom';
import { useStoreActions } from 'easy-peasy';
/* import { DataProvider } from './context/DataContext.jsx'; */


function ReactRouter() {
    const setPosts = useStoreActions((actions) => actions.setPosts);
    const { data, fetchError, isLoading } = useAxiosFetch('http://localhost:3500/posts');

    useEffect(() => {
        setPosts(data); 
    }, [data, setPosts])


    return (
        <div className='App'>
            <Header title={'React JS Blog'} />
                <Nav />
                <Switch>
                <Route exact path='/' >
                    <Home
                        isLoading={isLoading}
                        fetchError={fetchError}
                    />
                </Route>
                    <Route exact path='/post' component={NewPost} />
                    <Route path='/edit/:id' component={EditPost} />
                    <Route path='/post/:id' component={PostPage} />
                    <Route path='/about' component={About} />
                    <Route path='*' component={Missing}/>
                </Switch>
            <Footer />
        </div>
    )
}

export default ReactRouter;