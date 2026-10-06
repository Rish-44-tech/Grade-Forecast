import Sg from "./Sg";
import Cg from "./Cg";

function App() {

  return (
    <>
    <title>Grade Forecast</title>
    <div className="min-h-screen w-full text-slate-700">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="text-center mb-8 sm:mb-10">
          <h1 className="text-2xl sm:text-3xl font-semibold text-slate-800">
            Grade Forecast
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Sg></Sg>
          <Cg></Cg>
        </div>
      </div>
    </div>
    </>
  )

}
export default App
