import Header from './Header.jsx'
import AddItem from './AddItem.jsx'
import Content from './Contents.jsx'
import Footer from './Footer.jsx'
import { useState } from 'react';

function App() {
  //This is the new-short form replacement
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('shoppinglist')) || []);
  //Declaring a useState for adding New-item for the Input Form
  const [newItem, setNewItem] = useState('')

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

  //This function display/get the item set and store in the local storage
  const setAndSaveItems = (newItems) => {
    setItems(newItems);
    localStorage.setItem('shoppinglist', JSON.stringify(newItems));
  }

  //Defining the what the addItem function will do
  //Which is to add new item to the form
  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1; 
    const myNewItem = { id, checked: false, item };
    const listItems = [...items, myNewItem];
    setAndSaveItems(listItems);
  }

  //This function is used to check-mark the item in the grocery list
  const handleCheck = (id) => {
    /* console.log(`key: ${id}`) */
    const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
    setAndSaveItems(listItems);
  }

  //This function used to delete the grocery list item
  const handleDelete = (id) => {
    /* console.log(id); */
    const listItems = items.filter((item) => item.id !== id);
    setAndSaveItems(listItems);
  }

  //This function handle the submit action of the input form.
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
   /*  console.log(newItem) */
    addItem(newItem);
    setNewItem('');
  }

  return (
    <>
      <div className='App' >
        <Header title='Grocery List' />
        <AddItem
          newItem={newItem}
          setNewItem={setNewItem}
          handleSubmit={handleSubmit}
        />
        <Content
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
        <Footer length={items.length} />
        
      </div>
    </>
  )
}

export default App

