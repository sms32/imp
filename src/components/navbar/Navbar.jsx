// import "./navbar.scss";
// import { motion } from "framer-motion";
// import Sidebar from "../sidebar/Sidebar";

// const Navbar = () => {
//   return (
//     <div className="navbar">
//      {/* Sidebar */}
//      <Sidebar/>
//      <div className="wrapper">
//      <motion.span
//           initial={{ opacity: 0, scale: 0.5 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.5 }}
//         >
//           SAM MICHAEL S
//         </motion.span>
//         <div className="social">
//           <a href="https://www.facebook.com/sam.michael.100483?mibextid=JRoKGi">
//             <img src="/facebook.png" alt="" />
//           </a>
//           <a href="https://instagram.com/sam_michael.s?igshid=OGQ5ZDc2ODk2ZA==">
//             <img src="/instagram.png" alt="" />
//           </a>
//           <a href="#">
//             <img src="/youtube.png" alt="" />
//           </a>
//           <a href="#">
//             <img src="/dribbble.png" alt="" />
//           </a>
//         </div>
//      </div>
        
//     </div>
//   );
// };

// export default Navbar;

import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          SAM MICHAEL S
        </motion.span>
        <div className="social">
          <a href="https://www.facebook.com/sam.michael.100483?mibextid=JRoKGi">
            <img src="/facebook.png" alt="" />
          </a>
          <a href="https://instagram.com/sam_michael.s?igshid=OGQ5ZDc2ODk2ZA==">
            <img src="/instagram.png" alt="" />
          </a>
          <a href="https://github.com/sms32">
            <img src="/github.png" alt="" />
          </a>
          <a href="https://www.linkedin.com/in/sam-michael-s-455029295">
            <img src="/linkedin.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;