import { useState, useEffect } from 'react';
import Form from './Form.jsx';
import List from './List.jsx';


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
        <main> 
            <Form reqType={reqType} setReqType={setReqType} />
            <List items={items} />
        </main>
    )
}
        
export default FetchChallenge;