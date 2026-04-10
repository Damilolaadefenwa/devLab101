import colorNames from 'colornames';


const AddColor = ({colorValue, setColorValue, setHexValue, isDarkText, setIsDarkText}) => {
  return (
      <form onSubmit={(e) => e.preventDefault()} className="flex flex-col items-center justify-center w-full max-w-sm mx-auto p-4 space-y-4" >
          <label htmlFor="addColor" className="sr-only">Add Color Name:</label>
          {/* <label htmlFor="form" className="absolute -left-[99999px]">Add Color Name:</label> */}
          <input
              className="w-full p-2 text-lg border-2 border-gray-400 rounded shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
              id='addColor'
              autoFocus
              type="text"
              placeholder="Add Color Name Here"
              required
              value={colorValue}
              onChange={(e) => {
                  setColorValue(e.target.value); setHexValue(colorNames(e.target.value)); 
                 }}
            />
          <button
              className="w-full min-h-12 mt-2 text-base rounded shadow-[2px_2px_5px_#000] p-[0.35rem] bg-white border border-black hover:bg-gray-100 active:scale-95 transition-all"
              type='button'
              onClick={() => setIsDarkText(!isDarkText)}
          >
              Toggle Text Color
            </button>
      </form>
    )
}

export default AddColor