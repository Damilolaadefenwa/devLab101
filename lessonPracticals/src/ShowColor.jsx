
const ShowColor = ({colorValue}) => {
  return (
      <section style={{backgroundColor: colorValue}} className="w-64 h-64 border-2 border-black flex items-center justify-center rounded-md shadow-md mb-4 transition-colors duration-300">
          <p className="text-xl font-semibold">
              {colorValue ? colorValue : "Empty Value"}
              {/* If colorValue is empty, show "Empty Value", otherwise show the color name */}
          </p>
      </section>
    )
}

export default ShowColor