
const AddColor = ({colorValue, setColorValue}) => {
  return (
      <form onSubmit={(e) => e.preventDefault()} >
          <input
              autoFocus
              type="text"
              placeholder="Add Color Here"
              className="w-64 p-2 text-lg border-2 border-gray-400 rounded shadow-sm focus:outline-none focus:border-blue-500"
              value={colorValue}
              onChange={(e) => setColorValue(e.target.value)}
          />
      </form>
    )
}

export default AddColor