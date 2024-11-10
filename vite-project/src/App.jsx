import "./index.css";
import Canvas from "./Canvas";
import data from "./data";

function App() {
  return (
    <div>
      <div className="w-full min-h-screen relative ">
        {data[0].map((canvasdets, index) => (
          <Canvas key={index} details={canvasdets} />
        ))}
      </div>
      <div className="w-full min-h-screen relative ">
        {data[1].map((canvasdets, index) => (
          <Canvas key={index} details={canvasdets} />
        ))}
      </div>
      <div className="w-full min-h-screen relative ">
        {data[2].map((canvasdets, index) => (
          <Canvas key={index} details={canvasdets} />
        ))}
      </div>
      <div className="w-full min-h-screen relative ">
        {data[3].map((canvasdets, index) => (
          <Canvas key={index} details={canvasdets} />
        ))}
      </div>
      <div className="w-full min-h-screen relative ">
        {data[4].map((canvasdets, index) => (
          <Canvas key={index} details={canvasdets} />
        ))}
      </div>
      <div className="w-full min-h-screen relative ">
        {data[5].map((canvasdets, index) => (
          <Canvas key={index} details={canvasdets} />
        ))}
      </div>
      <div className="w-full min-h-screen relative ">
        {data[6].map((canvasdets, index) => (
          <Canvas key={index} details={canvasdets} />
        ))}
      </div>
    </div>
  );
}

export default App;
