import Feed from './Feed.jsx';
import { useContext } from "react";
import DataContext from "./context/DataContext";

const Home = () => {
  
  //This used to be in the destructured Anonimous function  before useContext
  const { searchResults, fetchError, isLoading } = useContext(DataContext);
  
  return (
    <main className="Home">
      {isLoading && <p className='statusMsg'>Loading Post...</p>}
      {fetchError && <p className='statusMsg' style={{ color: 'red' }}>{fetchError}</p>}
      {!isLoading && !fetchError && (searchResults.length ? <Feed posts={searchResults} /> : <p className='statusMsg'>No Posts to display.</p> )}
    </main>
  )
}

export default Home