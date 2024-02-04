// import { useRef } from "react";
// import "./services.scss";
// import { motion, useInView } from "framer-motion";

// const variants = {
//   initial: {
//     x: -500,
//     y: 100,
//     opacity: 0,
//   },
//   animate: {
//     x: 0,
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 1,
//       staggerChildren: 0.1,
//     },
//   },
// };

// const Services = () => {
//   const ref = useRef();

//   const isInView = useInView(ref, { margin: "-100px" });

//   return (
//     <motion.div
//       className="services"
//       variants={variants}
//       initial="initial"
//       // animate="animate"
//       // whileInView="animate"
//       ref={ref}
//       animate={"animate"}
//     >
//       <motion.div className="textContainer" variants={variants}>
//         <p>
//           SAM MICHAEL S
//         </p>
     
//       </motion.div>
//       <motion.div className="titleContainer" variants={variants}>
//         <div className="title">
//           {/* <img src="/people.web" alt="" /> */}
//           <h1 id="h1">
//             <motion.b whileHover={{color:"plun"}}>ABOUT</motion.b>
//           </h1>
//         </div>
//         <div className="title">
//           <h1 >
//             <motion.b whileHover={{color:"lightblue"}} >I am a first-year student enrolled in the B.Tech Computer Science and Engineering program with a specialization in ArtificialIntelligence and Machine Learning at Karunya University. 
//             Presently, I am engaged in college projects focused on the development ofweb applications. 
//             These projects involve utilizing ReactJS for the frontend and Django for the backend components. 
//             Additionally, Iam actively participating in a Google cybersecurity course to enhance my foundational knowledge in cybersecurity and gain insightsinto potential threats.
//             I aspire to enhance my proficiency and surpass my current boundaries in the field of Artificial Intelligence andMachine Learning (AIML).
//             </motion.b> 
//           </h1>
//           {/* <button>WHAT WE DO?</button> */}
//         </div>
//       </motion.div>
//       <motion.div className="listContainer" variants={variants}>
//         <motion.div
//           className="box"
//           whileHover={{ background: "lightgray", color: "black" }}
//         >
//           <h2>Branding</h2>
//           <p>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
//             libero enim nisi aliquam consectetur expedita magni eius ex corrupti
//             animi! Ad nam pariatur assumenda quae mollitia libero repellat
//             explicabo maiores?
//           </p>
//           <button>Go</button>
//         </motion.div>
//         <motion.div
//           className="box"
//           whileHover={{ background: "lightgray", color: "black" }}
//         >
//           <h2>Branding</h2>
//           <p>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
//             libero enim nisi aliquam consectetur expedita magni eius ex corrupti
//             animi! Ad nam pariatur assumenda quae mollitia libero repellat
//             explicabo maiores?
//           </p>
//           <button>Go</button>
//         </motion.div>
//         <motion.div
//           className="box"
//           whileHover={{ background: "lightgray", color: "black" }}
//         >
//           <h2>Branding</h2>
//           <p>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
//             libero enim nisi aliquam consectetur expedita magni eius ex corrupti
//             animi! Ad nam pariatur assumenda quae mollitia libero repellat
//             explicabo maiores?
//           </p>
//           <button>Go</button>
//         </motion.div>
//         <motion.div
//           className="box"
//           whileHover={{ background: "lightgray", color: "black" }}
//         >
//           <h2>Branding</h2>
//           <p>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
//             libero enim nisi aliquam consectetur expedita magni eius ex corrupti
//             animi! Ad nam pariatur assumenda quae mollitia libero repellat
//             explicabo maiores?
//           </p>
//           <button>Go</button>
//         </motion.div>
//       </motion.div>
//     </motion.div>
//   );
// };

// export default Services;

import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p id="P1">
         SAM MICHAEL
        
        </p>
       
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          
          <h1>
            <motion.b whileHover={{color:"orange"}}>I am a first-year student enrolled in the B.Tech Computer Science and Engineering program with a specialization in ArtificialIntelligence and Machine Learning at Karunya University. 
           </motion.b>
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{color:"orange"}}>For Your</motion.b> Business.
          </h1>
          <button>WHAT WE DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            <li>
              HTML & CSS                                  
            </li>
            <li>
              C/C++
            </li>
            <li>
              PYTHON
            </li>
            <li>
              SQL
            </li>
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            libero enim nisi aliquam consectetur expedita magni eius ex corrupti
            animi! Ad nam pariatur assumenda quae mollitia libero repellat
            explicabo maiores?
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            libero enim nisi aliquam consectetur expedita magni eius ex corrupti
            animi! Ad nam pariatur assumenda quae mollitia libero repellat
            explicabo maiores?
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            libero enim nisi aliquam consectetur expedita magni eius ex corrupti
            animi! Ad nam pariatur assumenda quae mollitia libero repellat
            explicabo maiores?
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;