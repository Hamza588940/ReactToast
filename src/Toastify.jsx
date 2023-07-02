import React, { useState, useEffect, useRef } from "react";
import "./toast.css";

const Toastify = ({ message, type }) => {
  const [alertType, setAlertType] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const timeoutIdRef = useRef(null);
  // hello
  useEffect(() => {
    if (type === "success") {
      setAlertType("success");
    } else if (type === "warning") {
      setAlertType("warning");
    } else if (type === "error") {
      setAlertType("error");
    }
  }, [type]);

  useEffect(() => {
    if (alertType) {
      timeoutIdRef.current = setTimeout(() => {
        setAlertType("");
        setIsHovered(false);
      }, 2500);
      return () => clearTimeout(timeoutIdRef.current);
    }
  }, [alertType]);

  const handleMouseEnter = () => {
    setIsHovered(true);
    clearTimeout(timeoutIdRef.current);
    const elements = document.getElementsByClassName(alertType);
    for (let i = 0; i < elements.length; i++) {
      const element = elements[i];
      element.style.animationPlayState = "paused";
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    timeoutIdRef.current = setTimeout(() => {
      setAlertType("");
    }, 2500);
    const elements = document.getElementsByClassName(alertType);
    for (let i = 0; i < elements.length; i++) {
      const element = elements[i];
      element.style.animationPlayState = "running";
    }
  };

  return (
    <div>
      <div className="toastBox">
        {alertType === "success" && (
          <div
            className="toast"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="mt">
              <i className="fa-solid fa-circle-check icon"></i>
              {message}
            </div>
            <span
              className="success"
              style={{
                animationPlayState: isHovered ? "paused" : "running",
              }}
            ></span>
          </div>
        )}
        {alertType === "warning" && (
          <div
            className="toast"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="mt">
              <i className="fa-solid fa-circle-xmark icon"></i>
              {message}
            </div>
            <span
              className="warning"
              style={{
                animationPlayState: isHovered ? "paused" : "running",
              }}
            ></span>
          </div>
        )}
        {alertType === "error" && (
          <div
            className="toast"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="mt">
              <i className="fa-solid fa-circle-exclamation icon"></i>
              {message}
            </div>
            <span
              className="error"
              style={{
                animationPlayState: isHovered ? "paused" : "running",
              }}
            ></span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Toastify;
