// src/components/CustomCursor.jsx
import { useEffect, useRef } from "react";
import gsap from "gsap";

const CustomCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.2,
        ease: "power2.out",
      });
    };

    // Inside useEffect or additional state
document.querySelectorAll("a, button").forEach((el) => {
  el.addEventListener("mouseenter", () => {
    gsap.to(cursorRef.current, { scale: 2 });
  });
  el.addEventListener("mouseleave", () => {
    gsap.to(cursorRef.current, { scale: 1 });
  });
});


    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div
      ref={cursorRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "50px",
        height: "50px",
        border: "4px solid #e6e4f3",
        borderRadius: "50%",
        transform: "translate(-50%, -50%)",
        pointerEvents: "none",
        zIndex: 99999,
        mixBlendMode: "difference",
        color: "black"
      }}
    />
  );
};

export default CustomCursor;
