/* LEARNING REACT ROUTER FOR FULL APPLICATION */
import Header from './RHeader.jsx';
import Nav from './Nav.jsx';
import Footer from './RFooter.jsx';
import Home from './Home.jsx';
import NewPost from './NewPost.jsx';
import PostPage from './PostPage.jsx';
import About from './About.jsx';
import Missing from './Missing.jsx';
import { Route, Switch, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';


function ReactRouter() {
    
    return (
        <div className='App'>
            <Header />
            <Nav />
            <Home />
            <NewPost />
            <PostPage />
            <About />
            <Missing />
            <Footer />

        </div>
    )
}

export default ReactRouter