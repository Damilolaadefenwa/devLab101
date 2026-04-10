import ShowColor from "./ShowColor.jsx"
import AddColor from "./AddColor.jsx"

{/* Dave-Gray Project Challenge */ }

const Content = ({colorValue, setColorValue}) => {
  return (
      <main className="flex flex-col items-center justify-center min-h-screen bg-amber-50">
          <ShowColor
            colorValue={colorValue}
          />
          <AddColor
              colorValue={colorValue}
              setColorValue={setColorValue}
          /> 
      </main>
    )
}

export default Content