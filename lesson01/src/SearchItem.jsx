
 const SearchItem = ({search, setSearch}) => {
   return (
       <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
           <label htmlFor="search">
               Search
           </label>
           <input
               id="search"
               type="text"
               role="searchbox"
               placeholder="search Items"
               /* Adding one source of truth using the value & event-method onchange */
               value={search}
               onChange={(e) => setSearch(e.target.value)}
           />

       </form>
    )
 }
 
 export default SearchItem