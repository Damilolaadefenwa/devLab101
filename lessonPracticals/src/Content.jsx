import ShowColor from "./ShowColor.jsx"
import AddColor from "./AddColor.jsx"

{/* Dave-Gray Project Challenge */ }

const Content = ({colorValue, hexValue, setHexValue, setColorValue, isDarKText, setIsDarkText}) => {
  return (
      <main className="flex flex-col items-center justify-center min-h-screen bg-amber-50">
          <ShowColor
            colorValue={colorValue}
            hexValue={hexValue}
            isDarKText={isDarKText}
          />
          <AddColor
            colorValue={colorValue}
            setColorValue={setColorValue}
            setHexValue={setHexValue}
            isDarKText={isDarKText}
            setIsDarkText={setColorValue}
          /> 
      </main>
    )
}

export default Content