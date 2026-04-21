import Feed from './Feed.jsx';

const Home = ({ posts, fetchError, isLoading }) => {
  return (
        <main className="Home">
          {isLoading && <p className='statusMsg'>Loading Post...</p>}
          {fetchError && <p className='statusMsg' style={{ color: 'red' }}>{fetchError}</p>}
          {!isLoading && !fetchError && (posts.length ? <Feed posts={posts} /> : <p className='statusMsg'>No Posts to display.</p> )}
        </main>
    )
}

export default Home