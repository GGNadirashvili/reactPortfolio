// import React, { useState, useEffect } from "react";

// function ScrollToTop() {
//   const [isScrolled, setIsScrolled] = useState(false);

//   const handleClick = () => {
//     window.scrollTo(0, 0);
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollTop = document.documentElement.scrollTop;

//       if (scrollTop > 200) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <div className="scroll-container container">
//       <button className="btn" onClick={handleClick}>
//         Scroll to Top
//       </button>
//     </div>
//   );
// }

// export default ScrollToTop;
