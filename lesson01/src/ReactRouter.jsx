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
import { Route, Switch } from 'react-router-dom';
import { DataProvider } from './context/DataContext.jsx';


function ReactRouter() {
   
    return (
        <div className='App'>
            <Header title={'React JS Blog'} />
            <DataProvider>
                <Nav />
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/post' component={NewPost} />
                    <Route path='/edit/:id' component={EditPost} />
                    <Route path='/post/:id' component={PostPage} />
                    <Route path='/about' component={About} />
                    <Route path='*' component={Missing}/>
                </Switch>
            </DataProvider> 
            <Footer />
        </div>
    )
}

export default ReactRouter;