/* eslint-disable no-unused-vars */
import "./index.css";
import Canvas from "./Canvas";
import data from "./data";
import LocomotiveScroll from "locomotive-scroll";
import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function App() {
  const [showCanvas, setShowCanvas] = useState(false);
  const headingref = useRef(null);
  const growingSpan = useRef(null);

  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
  }, []);

  useGSAP(() => {
    headingref.current.addEventListener("click", (e) => {
      setShowCanvas(!showCanvas);
      if (!showCanvas) {
        if (growingSpan.current) {
          gsap.set(growingSpan.current, {
            top: e.clientY,
            left: e.clientX,
          });
          gsap.set("body", {
            backgroundColor: "#fd2c2a",
            color: "#000",
          }),
            gsap.to(growingSpan.current, {
              scale: 1000,
              duration: 1,
              ease: "power4.inOut",
              onComplete: () => {
                gsap.set(growingSpan.current, {
                  scale: 0,
                  clearProps: "all",
                });
              },
            });
        }
      } else {
        gsap.set("body", {
          color: "#fff",
          backgroundColor: "#000",
        });
      }
    });
  }, [showCanvas]);

  return (
    <div>
      <span
        ref={growingSpan}
        className="growing rounded-full block fixed top-[-20%] left-[-20%] w-4 h-4"
      ></span>
      <div className="w-full min-h-screen relative font-['JetBrains_Mono ']">
        {showCanvas &&
          data[0].map((canvasdets, index) => (
            <Canvas key={index} details={canvasdets} />
          ))}
        <div className="w-full h-screen z-[1]  relative">
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
              <h1
                className="text-[17rem] font-normal tracking-tight leading-none"
                ref={headingref}
              >
                Thirtysixstudios
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-screen z-[1] relative mt-40 ml-[3%]">
        {showCanvas &&
          data[0].map((canvasdets, index) => (
            <Canvas key={index} details={canvasdets} />
          ))}
        <div className="relative z-[1]">
          <h1 className="text-8xl tracking-tight">About the Brand</h1>
          <p className="text-4xl mt-10 leading-[1.8] font-light w-[80%]">
            we are a team of designers, developers, and startegists who are
            passionate about creating digital experiences that are both
            beautiful and functional, we are a team of designers, developers,
            and startegists who are passionate about creating digital
            experiences that are both beautiful and functional
          </p>

          <img
            className="w-[40%] relative z-[0] mt-10"
            src="https://directus.funkhaus.io/assets/b3b5697d-95a0-4af5-ba59-b1d423411b1c?withoutEnlargement=true&fit=outside&width=1400&height=1400"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default App;
