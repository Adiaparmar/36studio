import { useEffect, useRef, useState } from "react";
import canvasImages from "./canvasimages";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import PropTypes from "prop-types";

function Canvas({ details }) {
  const [index, setIndex] = useState({ value: details.startIndex });
  const canvasRef = useRef(null);

  useGSAP(() => {
    gsap.to(index, {
      value: details.startIndex + details.numImages - 1,
      duration: details.duration,
      repeat: -1,
      ease: "linear",
      onUpdate: () => {
        setIndex({ value: Math.round(index.value) });
      },
    });
  }, [details.startIndex]);

  useEffect(() => {
    const scale = window.devicePixelRatio;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.src = canvasImages[index.value];

    img.onload = () => {
      canvas.width = canvas.offsetWidth * scale;
      canvas.height = canvas.offsetHeight * scale;
      canvas.style.width = canvas.offsetWidth + "px";
      canvas.style.height = canvas.offsetHeight + "px";

      ctx.scale(scale, scale);
      ctx.drawImage(img, 0, 0, canvas.offsetWidth, canvas.offsetHeight);
    };
  }, [index]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute"
      style={{
        width: `${details.size * 1.4}px`,
        height: `${details.size * 1.4}px`,
        top: `${details.top}%`,
        left: `${details.left}%`,
        zIndex: `${details.zIndex}%`,
      }}
      id="canvas"
    ></canvas>
  );
}

Canvas.propTypes = {
  details: PropTypes.shape({
    startIndex: PropTypes.number.isRequired,
    duration: PropTypes.number.isRequired,
    numImages: PropTypes.number.isRequired,
    size: PropTypes.number.isRequired,
    top: PropTypes.number.isRequired,
    left: PropTypes.number.isRequired,
    zIndex: PropTypes.number.isRequired,
  }),
};

export default Canvas;
