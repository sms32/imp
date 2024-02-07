import { useRef, useState } from "react";
import "./contact.scss";
import { motion, useInView } from "framer-motion";
import emailjs from "@emailjs/browser";

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const Contact = () => {
  const ref = useRef();
  const formRef = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [isMobileFormFocused, setIsMobileFormFocused] = useState(false); // State to track if the form is focused on mobile

  const isInView = useInView(ref, { margin: "-100px" });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_dv93rzi",
        "template_ryhk2op",
        formRef.current,
        "DMoQN6aD1TyXexpht"
      )
      .then(
        (result) => {
          setSuccess(true);
        },
        (error) => {
          setError(true);
        }
      );
  };

  const handleMobileFormFocus = () => {
    setIsMobileFormFocused(true);
  };

  const handleMobileFormBlur = () => {
    setIsMobileFormFocused(false);
  };

  return (
    <motion.div
      ref={ref}
      className={`contact ${isMobileFormFocused ? 'mobile-form-focused' : ''}`} // Apply CSS class conditionally
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div className="textContainer" variants={variants}>
        <motion.h1 variants={variants}>Let’s work together</motion.h1>
        <motion.div className="item" variants={variants}>
          <h2>Mail</h2>
          <span>sammichael@karunya.edu.in</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Address</h2>
          <span>KARUNYA UNIVERSITY <br></br> Coimbatore , Tamil Nadu</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2></h2>
          <span></span>
        </motion.div>
      </motion.div>
      <div className="formContainer">
        <motion.div
          className="phoneSvg"
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 0 }}
          transition={{ delay: 3, duration: 1 }}
        >
          <svg width="450px" height="450px" viewBox="0 0 32.666 32.666" className="svg1">
            {/* SVG path */}
          </svg>
        </motion.div>
        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 4, duration: 1 }}
          onFocus={handleMobileFormFocus} // Handle form focus
          onBlur={handleMobileFormBlur} // Handle form blur
        >
          <input type="text" required placeholder="Full Name" name="name"/>
          <input type="email" required placeholder="Email" name="email"/>
          <textarea rows={8} placeholder="Message" name="message"/>
          <button>Submit</button>
          {error && "Error"}
          {success && "Success"}
        </motion.form>
      </div>
    </motion.div>
  );
};

export default Contact;
