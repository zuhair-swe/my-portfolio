
import { useState } from "react";
import API from "../services/api";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
        // frontend validation
      if (!form.name || !form.email || !form.message) {
      alert("Please fill all fields");
      return;
    }
   try {
      await API.post("/api/contact", form);
      alert("Message sent");

      // clear form
      setForm({
        name: "",
        email: "",
        message: ""
      });

    } catch (error) {
      console.log(error);
    }
  };

  return (
     <section id="contact" className="section">

         <h2>Contact</h2>
    <form className="contact-form" onSubmit={handleSubmit}>
      <input
        value={form.name}
        placeholder="Name"
        onChange={(e)=>setForm({...form,name:e.target.value})}
      />
      <input
        value={form.email}
        placeholder="Email"
        onChange={(e)=>setForm({...form,email:e.target.value})}
      />
      <textarea
        value={form.message}
        placeholder="Message"
        onChange={(e)=>setForm({...form,message:e.target.value})}
      />
      <button className ="btn" type="submit">Send</button>
    </form>
  </section>

  );
}

export default Contact;