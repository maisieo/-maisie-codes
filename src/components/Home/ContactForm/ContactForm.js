import React, { useState } from "react";
import "./ContactForm.scss";

function ContactForm() {
  // let [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   message: "",
  // });

  // // Handle form data change
  // let handleChange = (e) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  // // Handle form submission
  // let handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await fetch("/", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/x-www-form-urlencoded" },
  //       body: new URLSearchParams(formData).toString(),
  //     });

  //     if (response.ok) {
  //       // Form submission successful
  //       alert("Thank you for your message. It has been sent.");
  //       setFormData({
  //         name: "",
  //         email: "",
  //         message: "",
  //       });
  //     } else {
  //       // Handle server errors or invalid responses
  //       alert("There was a problem with your submission. Please try again.");
  //     }
  //   } catch (error) {
  //     console.error("Error:", error);
  //     alert("An error occurred. Please try again later.");
  //   }
  // };

  return (
    // <div className="contact-section">
    //   <div className="inner-wrapper">
    //     <div className="contact-info">
    //       <h2>Contact</h2>
    //       <p>
    //         Feel free to reach out to me with any questions. I'm open to hearing
    //         about roles or projects you're currently working on.
    //       </p>
    //     </div>
    //     <div className="contact-form">
    //       <form
    //         name="contact"
    //         method="POST"
    //         data-netlify="true"
    //         onSubmit={handleSubmit}
    //       >
    //         <input type="hidden" name="form-name" value="contact" />
    //         <div className="input-section">
    //           <input
    //             type="text"
    //             name="name"
    //             placeholder="Name"
    //             value={formData.name}
    //             onChange={handleChange}
    //             required
    //           />
    //         </div>
    //         <div className="input-section">
    //           <input
    //             type="email"
    //             name="email"
    //             placeholder="Email"
    //             value={formData.email}
    //             onChange={handleChange}
    //             required
    //           />
    //         </div>
    // <div className="input-section">
    //   <textarea
    //     name="message"
    //     placeholder="Hi Maisie..."
    //     value={formData.message}
    //     onChange={handleChange}
    //     required
    //   ></textarea>
    // </div>

    //       </form>
    //     </div>
    //   </div>
    // </div>
    <div className="contact-section">
      <form
        name="contact v1"
        method="post"
        data-netlify="true"
        onSubmit="submit"
      >
        <input type="hidden" name="form-name" value="contact v1" />
        <div className="input-section">
          <label>Name</label>
          <input
            type="text"
            name="name"
            // placeholder="Name"
            // value={formData.name}
            // onChange={handleChange}
            // required
          />
        </div>
        <div className="input-section">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" placeholder="Email" />
        </div>

        <div className="input-section">
          <label htmlFor="email">Message</label>
          <textarea name="message" placeholder="Hi Maisie..."></textarea>
        </div>
      </form>
      <div className="button-container">
        <button type="submit" className="contact-button">
          Send message
        </button>
      </div>
    </div>
  );
}

export default ContactForm;
