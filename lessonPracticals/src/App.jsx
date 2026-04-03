import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'

function App() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center gap-12 bg-gray-900">
       
       {/* Image Container */}
       <div className="relative mx-auto w-42.5">
          <img 
            src={heroImg} 
            className="relative z-0 mx-auto w-42.5" 
            alt="Hero background" 
          />
          <img 
            src={reactLogo} 
            className="absolute inset-x-0 top-[34px] z-10 mx-auto h-[28px] [transform:perspective(2000px)_rotateZ(300deg)_rotateX(44deg)_rotateY(39deg)_scale(1.4)]" 
            alt="React logo" 
          />
          <img 
            src={viteLogo} 
            className="absolute inset-x-0 top-[107px] z-0 mx-auto h-[26px] w-auto [transform:perspective(2000px)_rotateZ(300deg)_rotateX(40deg)_rotateY(39deg)_scale(0.8)]" 
            alt="Vite logo" 
          />
        </div>

      {/* Your Tailwind Badge */}
      <div className="rounded-xl bg-gray-800 p-8 text-center shadow-lg">
        <h1 className="mb-4 text-4xl font-bold text-blue-400">
          Ready for Practice!
        </h1>
        <p className="text-lg text-white">
          Tailwind is successfully installed.
        </p>
      </div>

    </section>
  );
}

export default App;