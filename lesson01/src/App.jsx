/* At the begining of the Parent file is where you import
or required as the term used in node.js the function from any 
component into the Parent App file   */

import Header from './Header.jsx'
import SearchItem from './SearchItem.jsx'
import AddItem from './AddItem.jsx'
import Content from './Contents.jsx'
import Footer from './Footer.jsx'
import { useState, useEffect } from 'react';
import apiRequest from './apiRequest.jsx';

function App() {
  // Fetching Data through API and using json dummy db.
  const API_URL = 'http://localhost:3500/items';

  /* 1. DECLARE REACT USESTATE FOR DYNAMIC RESULT HERE */
  //This is the new-short replacement for old-default-object and useState that was commented-out.
  const [items, setItems] = useState([]);
  /* const [items, setItems] = useState(JSON.parse(localStorage.getItem('shoppinglist')) || []); */
  //Declaring a useState for adding New-item for the Add Form
  const [newItem, setNewItem] = useState('')
  //Declaring a useState for searching item in the Search Form
  const [search, setSearch] = useState('')
  //Catching and Set Errors
  const [fetchError, setFetchError] = useState(null);
  //Declaring the Loading-state When waiting for the API ASYNC function.
  const [isLoading, setIsLoading] = useState(true);

  // This was the formal Object hold default Items before replacing
  // it with the current state
  /* const [items, setItems] = useState([
    {
      id: 1,
      checked: true,
      item: "one half pound bag of Cocoa Covered Almond Unsalted"
    },
    {
      id: 2,
      checked: false,
      item: "Item 2"
    },
    {
      id: 3,
      checked: false,
      item: "Item 3"
    }
  ]); */

  /*2. DECLARE YOUR FUNCTION-METHOD/PROPS HERE*/
  //A).Declaring useEffect Hook to effecting load data in the function below
  /* useEffect(() => {
    localStorage.setItem('shoppinglist', JSON.stringify(items));
  }, [items]) */
  //B).This function display/get the item set and store in the local storage. Then change to using the hook-useEffect together with Async-Await to fetch the data from local json-db like real MongoDB could do.We also set a timeout of 2000s to display isloading message while awaiting the restful API 
  useEffect(() => {
    
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw Error('Did not receive expected data');
        const listItems = await response.json();
        // console.log(listItems)
        setItems(listItems);
        setFetchError(null);
      } catch (error) {
        setFetchError(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    setTimeout(() => {
      (async () => await fetchItems())();
    }, 2000)
    
  }, [])

  //Defining the what the addItem function will do
  //Which is to add new item to the form
  // 1. Add 'async' right before the parentheses
  const addItem = async (item) => { 
    const id = items.length ? items[items.length - 1].id + 1 : 1; 
    const myNewItem = { id, checked: false, item };
    const listItems = [...items, myNewItem];
    
    // Update the screen instantly for a fast user experience
    setItems(listItems); 

    // 2. Define your options for the API
    const postOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(myNewItem)
    };

    // 3. Now you can safely use 'await' here!
    const result = await apiRequest(API_URL, postOptions);
    if (result) setFetchError(result);
  }

  //This function is used to check-mark the item in the grocery list
  const handleCheck = async (id) => {
    /* console.log(`key: ${id}`) */
    const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
    setItems(listItems);

    //Updating the check status of the item for the CRUD operation
    const myItem = listItems.filter((item) => item.id === id);
    const updateOptions = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({checked: myItem[0].checked})
    }
    const reqUrl = `${API_URL}/${id}`;
    const result = await apiRequest(reqUrl, updateOptions);
    if (result) setFetchError(result);
  }

  //This function used to delete the grocery list item
  const handleDelete = async (id) => {
    /* console.log(id); */
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);

    //Writing CRUD operation for the delete.
    const deleteOptions = { method: 'DELETE' };
    const reqUrl = `${API_URL}/${id}`;
    const result = await apiRequest(reqUrl, deleteOptions);
    if (result) setFetchError(result);
  }

  //This function handle the submit action of the input form.
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
   /*  console.log(newItem) */
    addItem(newItem);
    setNewItem('');
  }

  /*3. ADD YOUR FUNCTION COMPONENT & THEIR PROPERTY FOR PROPS DRILLING HERE */

  return (
    <>
      <div className='App' >
        <Header title='Grocery List' />
        <AddItem
          newItem={newItem}
          setNewItem={setNewItem}
          handleSubmit={handleSubmit}
        />
        <SearchItem
          search={search}
          setSearch={setSearch}
        />
        <main>
          {isLoading && <p>Loading Items...</p>}
          {fetchError && <p style={{color:"Red"}}>{`Error: ${fetchError}`}</p>}
          {!fetchError && !isLoading && <Content
            items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
          />}
        </main>
        <Footer length={items.length} />
      </div>
    </>
  )
}

export default App

