
const Form = ({reqType, setReqType}) => {
  return (
      <form onSubmit={(e) => e.preventDefault()} className=" flex w-full flex-1">
           <button 
                // We use backticks ` ` here to mix standard Tailwind classes with conditional ones!
                className={`w-full p-4 text-lg font-medium transition-colors ${
                    reqType === 'users' 
                    ? 'bg-black text-white' 
                    : 'bg-gray-100 text-black border border-gray-300 hover:bg-gray-200'
                }`}
                onClick={() => setReqType('users')}
            >
                Users
          </button>

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
        </form>
    )
}

export default Form