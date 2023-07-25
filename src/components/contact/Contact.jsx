import React, { useEffect } from "react";
import { motion } from "framer-motion";
import burger from "../../assets/burger2.png";
import {useDispatch, useSelector} from "react-redux"
import { useState } from "react";
import { contact } from "../../redux/actions/contact";
import toast from "react-hot-toast"

const Contact = () => {

  const dispatch=useDispatch()
  const {message:desc,error}=useSelector(state=>state.contact)

  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [message,setMessage]=useState("")
  const [disablebtn,setDisablebtn]=useState(false)

  const contactHandler=(e)=>{
    e.preventDefault()
    setDisablebtn(true)
    dispatch(contact(name,email,message))
    
  }

  useEffect(()=>{
    if(desc)
    {
      toast.success(desc)
      dispatch({type:"clearMessage"})
      setDisablebtn(false)
      setName("")
      setEmail("")
      setMessage("")
    }
    if(error)
    {
      toast.error(error)
      dispatch({type:"clearError"})
      setDisablebtn(false)
      setName("")
      setEmail("")
      setMessage("")
    }
  },[dispatch,desc,error])


  return (
    <section className="contact">
      <motion.form
        initial={{
          x: "-100vw",
          opacity: 0,
        }}
        animate={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          delay: 0.2,
        }}

        onSubmit={contactHandler}
      >
        <h2>Contact Us</h2>
        <input type="text" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)}/>
        <input type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <textarea rows="10" cols="30" placeholder="Message..." value={message} onChange={(e)=>setMessage(e.target.value)}></textarea>
        <button type="submit" disabled={disablebtn}>Send</button>
      </motion.form>
      <motion.div
        className="formBorder"
        initial={{
          x: "100vw",
          opacity: 0,
        }}
        animate={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          delay: 0.2,
        }}
      >
        <motion.div
          initial={{
            y: "-100vh",
            x: "50%",
            opacity: 0,
          }}
          animate={{
            x: "50%",
            y: "-50%",
            opacity: 1,
          }}
          transition={{
            delay: 0.8,
          }}
        >
          <img src={burger} alt="Burger" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
