import { FaPlus } from "react-icons/fa";
import { useRef } from "react";
/* Importing an hook(useRef) from react to shift the focus to 
additem bar even-though it's style in css */


const AddItem = ({newItem, setNewItem, handleSubmit }) => {
  const inputRef = useRef();
  
  return (
        <form className="addForm" onSubmit={handleSubmit}>
          <label htmlFor="addItem">Add Item</label>
          <input
              autoFocus
              ref={inputRef}
              id="addItem"
              type="text"
              placeholder="Add Item"
              required
              /* Adding one source of truth using the value & event-method onchange */
              value={newItem}
              onChange={(e) => setNewItem(e.target.value)}
            />
          <button
              type="submit"
              aria-label="Add Item"
              onClick={() => inputRef.current.focus()}
            >
              <FaPlus />
            </button>
        </form>
    )
}

export default AddItem