import ListItem from "./ListItem.jsx";

const List = ({ items }) => {
    return (
      <div className="p-4">
           <ul className="space-y-4 list-disc list-inside">
                {items.map(item => (
                    <ListItem key={item.id} item={item} />
                ))}
            </ul>
      </div>
    )
}

export default List