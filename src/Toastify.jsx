import React, { useState, useEffect, useRef } from "react";
import "./toast.css";

export const Toastify = ({ message, type }) => {
  const [alertType, setAlertType] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const timeoutIdRef = useRef(null);

  useEffect(() => {
    if (type === "success") {
      setAlertType("success");
    }
    if (type === "warning") {
      setAlertType("warning");
    }

    if (type === "error") {
      setAlertType("error");
    }
  }, [type]);

  useEffect(() => {
    if (alertType) {
      timeoutIdRef.current = setTimeout(() => {
        setAlertType(null);
        setIsHovered(false);
      }, 2500);
      return () => clearTimeout(timeoutIdRef.current);
    }
  }, [alertType]);

  const handleMouseEnter = () => {
    setIsHovered(true);
    clearTimeout(timeoutIdRef.current);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);

    timeoutIdRef.current = setTimeout(() => {
      setAlertType(null);
    }, 2500);
  };

  return (
    <>
      <div>
        <div className="toastBox">
          {alertType === "success" && (
            <div
              className="toast "
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
    </>
  );
};
