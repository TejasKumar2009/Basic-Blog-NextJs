import { useState } from "react"
import styles from "../styles/Contact.module.css"

const Contact = () => {

  const [name, setname] = useState("")
  const [email, setemail] = useState("")
  const [phone, setphone] = useState("")
  const [message, setmessage] = useState("")

  const changeInput = (e) => {
    if (e.target.name=="name"){
      setname(e.target.value)
    }
    else if (e.target.name=="email"){
      setemail(e.target.value)
    }
    else if (e.target.name=="phone"){
      setphone(e.target.value)
    }
    else if (e.target.name=="message"){
      setmessage(e.target.value)
    }
  }

  const handleSubmit = (e) => {
    // e.preventDefault()
    console.log("Form is submitted!")
  }
  
  return (
   <>
   <div className={styles.h1c}>
   <h1 className={styles.h1} >Contact Us</h1>
   </div>
    <form action="/api/postcontact" method="POST" onSubmit={handleSubmit} class={`${styles.form} ${styles.cf}`}>
  <div class={`${styles.half} ${styles.left} ${styles.cf}`}>
    <input class={styles.input} onChange={changeInput} type="text"  value={name} name="name" id={styles.input_name} placeholder="Enter Your Name"/>
    <input class={styles.input} onChange={changeInput} type="email" value={email} name="email" id={styles.input_email} placeholder="Enter Your Email address"/>
    <input class={styles.input} onChange={changeInput} type="phone" value={phone} name="phone" id={styles.input_subject} placeholder="Enter Your Phone Number"/>
  </div>
  <div class={`${styles.half} ${styles.right} ${styles.cf}`}>
    <textarea class={styles.textarea} onChange={changeInput} name="message" type="text" value={message} id={styles.input_message} placeholder="Enter Your Message..."/>
  </div>  
  <input className={styles.input} type="submit" value="Submit" id={styles.input_submit}/>
</form>
    </>
  )
}

export default Contact