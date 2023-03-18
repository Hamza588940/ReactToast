import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// import React, { useState, useEffect, useRef } from "react";
// import "./toast.css";

// export const Toasts = ({ message, type }) => {
//   const [alertType, setAlertType] = useState("");
//   const [isPaused, setIsPaused] = useState(false);
//   // const alertRef = useRef(null);
//   const [isHovered, setIsHovered] = useState(false);
//   useEffect(() => {
//     if (type === "success") {
//       setAlertType("success");
//     }
//     if (type === "warning") {
//       setAlertType("warning");
//     }

//     if (type === "error") {
//       setAlertType("error");
//     }
//   }, [type]);

//   useEffect(() => {
//     let timerId;
//     if (alertType && !isPaused) {
//       timerId = setTimeout(() => {
//         setAlertType("");
//       }, 100000);
//       return () => clearTimeout(timerId);
//     }
//   }, [alertType, isPaused]);

//   const handleMouseEnter = () => {
//     setIsPaused(true);
//     setIsHovered(true);
//     console.log("mouse enter");
//   };

//   const handleMouseLeave = () => {
//     setIsPaused(false);
//     setIsHovered(false);
//     console.log("mouse leave");
//   };

// const handleClick = () => {
//   let state = "";
//   state =
//     document.getElementById("success").style.animationPlayState === "paused"
//       ? "running"
//       : "paused";
//   document.getElementById("success").style.animationPlayState = state;
//   console.log("click");
// };
//   return (
//     <>
//       <div>
//         <div className="toastBox">
//           {alertType === "success" && (
//             <div
//               className="toast "
//               onMouseEnter={handleMouseEnter}
//               onMouseLeave={handleMouseLeave}
//             >
//               <div
//                 className="success"
//                 style={{
//                   animationPlayState: isHovered ? "paused" : "running",
//                 }}
//               ></div>
//               <i className="fa-solid fa-circle-check m"></i>
//               {message}
//             </div>
//           )}
//           {alertType === "warning" && (
//             <div
//               className="toast warning"
//               onMouseEnter={handleMouseEnter}
//               onMouseLeave={handleMouseLeave}
//             >
//               <i className="fa-solid fa-circle-xmark m"></i>
//               {message}
//             </div>
//           )}
//           {alertType === "error" && (
//             <div
//               className="toast error"
//               onMouseEnter={handleMouseEnter}
//               onMouseLeave={handleMouseLeave}
//             >
//               <i className="fa-solid fa-circle-exclamation m"></i>
//               {message}
//             </div>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };
// * {
//   margin: 0;
//   padding: 0;
//   font-family: "Courier New", Courier, monospace;
//   box-sizing: border-box;
// }

// body {
//   background: #f8edff;
// }

/* .buttons {
  margin: 50px;
}

.buttons button {
  background: rgb(47, 79, 79);
  color: #fff;
  border: 0;
  outline: 0;
  width: 120px;
  height: 50px;
  margin: 5px;
  cursor: pointer;
  border-radius: 12px;
} */

// #toastBox {
//   position: absolute;
//   top: 30px;
//   right: 30px;
//   display: flex;
//   align-items: flex-end;
//   flex-direction: column;
//   overflow: hidden;
//   padding: 20px;
// }

// .toast {
//   width: 400px;
//   height: 80px;
//   background: #fff;
//   font-weight: 500;
//   margin: 15px 0 15px auto;
//   box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
//   display: flex;
//   align-items: center;
//   position: relative;
//   /* transform: translateX(100%);
//   animation: moveleft 0.5s linear forwards; */
//   border-radius: 10px;
// }

/* @keyframes moveleft {
  100% {
    transform: translateX(0);
  }
} */

/* .toast .success {
  margin: 0 20px;
  font-size: 15px;
  color: rgb(0, 255, 127);
}

.toast .error {
  color: rgb(255, 69, 0);
}

.toast .warning {
  color: rgb(218, 165, 32);
} */

// .success::after {
//   content: "";
//   position: absolute;
//   left: 0;
//   bottom: 0;
//   width: 100%;
//   height: 5px;
//   background: rgb(0, 255, 127);
//   animation: anim 3s linear forwards;
// }

// @keyframes anim {
//   100% {
//     width: 0;
//   }
// }

/* .error::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 5px;
  background: rgb(255, 69, 0);
  animation: anim 3s linear forwards;
}
.warning::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 5px;
  background: rgb(218, 165, 32);
  animation: anim 3s linear forwards;
} */
