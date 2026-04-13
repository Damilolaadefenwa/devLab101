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
                    {/* flex: putting them in a row. w-full: takes up whole screen */}
                    <ul className="flex w-full">
                        {/* flex-1: making this list item take up exactly 1/3 of the space */}
                        <li className="flex-1">
                            <button 
                                // We use backticks ` ` here to mix standard Tailwind classes with conditional ones!
                                className={`w-full p-4 text-lg font-medium transition-colors ${
                                    reqType === 'users' 
                                        ? 'bg-black text-white' 
                                        : 'bg-gray-100 text-black border border-gray-300 hover:bg-gray-200'
                                }`}
                                onClick={() => setReqType('users')}
                            >
                                users
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
                                posts
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
                                comments
                            </button>
                        </li> 
                    </ul>     
                </nav>
            </header>
            
            {/* Added a little padding to the main area so the text doesn't touch the edges */}
            <main className="p-4"> 
                <ul className="space-y-4">
                    {items.map(item => (
                        <li key={item.id} className="text-gray-800">
                            {JSON.stringify(item)}
                        </li>
                    ))}
                </ul>
            </main>
        </>
    )
}
        
export default FetchChallenge;