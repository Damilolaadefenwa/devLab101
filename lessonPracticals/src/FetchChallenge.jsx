import { useState, useEffect } from 'react';

const FetchChallenge = () => {
    // 1. Use one base URL insteading of previous Three
    const API_URL = 'https://jsonplaceholder.typicode.com/';

    // 2. Use Two state instead of Three: A state for the URL and the data category, 
    const [reqType, setReqType] = useState('users');
    const [items, setItems] = useState([]);

    // 3. Fetch data whenever reqType changes
    useEffect(() => {
        const fetchItems = async () => {
            try {
                // Combine the base-URL with the current category such as the post/comments/users
                const response = await fetch(`${API_URL}${reqType}`);
                if (!response.ok) throw Error('Did not receive expected data');
                const data = await response.json();
                
                // Save the data to our items state
                setItems(data); 
            } catch(err) {
                console.log(err.message);
            }
        }

        // call the Async function inside the useEffect function
        fetchItems();
    }, [reqType]); // <-- This array tells React to run this fetch AGAIN if reqType changes

   // 4. Displaying result to the Browser.
    return (
        <>
            <header>
                <nav>
                    <ul className='flex w-full'>
                        <li className='flex-1'>
                            <button className={`w-full p-4 text-lg font-medium transition-colors ${reqType === 'users' ? 'bg-black text-white' : 'bg-gray-100 text-black border border-gray-300 hover:bg-gray-200'}`} onClick={() => setReqType('users')}>
                                Users
                            </button>

                        </li>

                        <li className="flex-1">
                            <button 
                                className={`w-full p-4 text-lg font-medium transition-colors ${
                                    reqType === 'posts' 
                                        ? 'bg-black text-white' 
                                        : 'bg-gray-100 text-black border border-gray-300 hover:bg-gray-200'
                                }`}
                                onClick={() => setReqType('posts')}
                            >
                                Posts
                            </button>
                        </li> 
                        
                        <li className="flex-1">
                            <button 
                                className={`w-full p-4 text-lg font-medium transition-colors ${
                                    reqType === 'comments' 
                                        ? 'bg-black text-white' 
                                        : 'bg-gray-100 text-black border border-gray-300 hover:bg-gray-200'
                                }`}
                                onClick={() => setReqType('comments')}
                            >
                                Comments
                            </button>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}
        
export default FetchChallenge;