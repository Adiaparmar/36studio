/* eslint-disable no-unused-vars */
import "./index.css";
import Canvas from "./Canvas";
import data from "./data";
import LocomotiveScroll from "locomotive-scroll";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll({}, []);
  });
  return (
    <div>
      <div className="w-full min-h-screen relative font-['JetBrains_Mono ']">
        {/* {data[0].map((canvasdets, index) => (
          <Canvas key={index} details={canvasdets} />
        ))} */}
        <div className="w-full h-screen text-white relative">
          <nav className=" w-full p-8 flex justify-between z-50">
            <div className="brand text-2xl font-regular">thirtysixstudios</div>
            <div className="links flex gap-10">
              {["Home", "About", "Projects", "Contact"].map((link, index) => (
                <a
                  key={index}
                  href={`#${link.toLowerCase()}`}
                  className="text-md hover:text-gray-300"
                >
                  {link}
                </a>
              ))}
            </div>
          </nav>
          <div className="textcontainer w-full px-[20%]">
            <div className="text w-[50%]">
              <h3 className="text-4xl leading-[1.5]">
                At thirtysixstudios, we build immersive digital experiences for
                brands with a purpose.
              </h3>
              <p className="text-lg w-[80%] mt-10 font-light">
                We are a team of designers, developers, and strategists who are
                passionate about creating digital experiences that are both
                beautiful and functional.
              </p>
              <p className="mt-10">Scroll</p>
            </div>
          </div>
          <div className="overflow-x-hidden w-full">
            <div className="w-90 absolute bottom-0 left-10">
              <h1 className="text-[17rem] font-normal tracking-tight leading-none">
                Thirtysixstudios
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-screen text-white mt-40 ml-[3%]">
        <h1 className="text-8xl tracking-tight">About the Brand</h1>
        <p className="text-4xl mt-10 leading-[1.8] font-light w-[80%]">
          we are a team of designers, developers, and startegists who are
          passionate about creating digital experiences that are both beautiful
          and functional, we are a team of designers, developers, and
          startegists who are passionate about creating digital experiences that
          are both beautiful and functional
        </p>
      </div>
    </div>
  );
}

export default App;
