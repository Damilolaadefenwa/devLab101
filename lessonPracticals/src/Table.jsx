import Row from './Row.jsx';

const Table = ({items}) => {
  return (
        <div className="w-full overflow-y-auto pt-10">
          <table className='w-full text-left border-collapse' >
              <tbody>
                  {items.map(item => (
                      <Row key={item.id} item={item} />
                  ))}
              </tbody>
          </table>
        </div>
        
    )
}

export default Table