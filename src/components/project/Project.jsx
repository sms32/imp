import { useRef } from "react";
import "./project.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
        id: 1,
        title: "MY FIRST PROJECT",
        img: "MYWEB.png",
        desc: "My initial project within the Web Development club involved the creation of a portfolio. Constructed utilizing HTML, CSS, and JavaScript, this endeavor provided me with a comprehensive understanding of the intricate workings of these languages, enabling me to strategically chart my course in the realm of web development.",
        link: "https://tide-shelled-fascinator.glitch.me/",
      },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2 >{item.title}</h2>
            <p>{item.desc}</p>
            <button >
              <a href={item.link} target="_blank" 
               re l="noopener noreferrer">
                 VIEW
               </a>
             </button>
             
          </motion.div>
        
        </div>
      </div>
    </section>
  );
};

const Project = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Project;