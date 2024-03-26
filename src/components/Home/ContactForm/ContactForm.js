// // import React, { useState } from "react";
// // import "./ContactForm.css";

// // function ContactForm() {
// //   let [formData, setFormData] = useState({
// //     name: "",
// //     email: "",
// //     message: "",
// //   });

// //   // Handle form data change
// //   let handleChange = (e) => {
// //     setFormData({
// //       ...formData,
// //       [e.target.name]: e.target.value,
// //     });
// //   };

// //   // Handle form submission
// //   let handleSubmit = async (e) => {
// //     e.preventDefault();
// //     try {
// //       const response = await fetch("/", {
// //         method: "POST",
// //         headers: { "Content-Type": "application/x-www-form-urlencoded" },
// //         body: new URLSearchParams(formData).toString(),
// //       });

// //       if (response.ok) {
// //         // Form submission successful
// //         alert("Thank you for your message. It has been sent.");
// //         setFormData({
// //           name: "",
// //           email: "",
// //           message: "",
// //         });
// //       } else {
// //         // Handle server errors or invalid responses
// //         alert("There was a problem with your submission. Please try again.");
// //       }
// //     } catch (error) {
// //       console.error("Error:", error);
// //       alert("An error occurred. Please try again later.");
// //     }
// //   };

// //   return (
// //     <div className="contact-section">
// //       <div className="inner-wrapper">
// //         <div className="contact-info">
// //           <h2>Contact</h2>
// //           <p>
// //             Feel free to reach out to me with any questions. I'm open to hearing
// //             about roles or projects you're currently working on.
// //           </p>
// //         </div>
// //         <div className="contact-form">
// //           <form
// //             name="contact"
// //             method="POST"
// //             data-netlify="true"
// //             action="/"
// //             onSubmit={handleSubmit}
// //           >
// //             <input type="hidden" name="form-name" value="contact" />
// //             <div className="input-section">
// //               <input
// //                 type="text"
// //                 name="name"
// //                 placeholder="Name"
// //                 value={formData.name}
// //                 onChange={handleChange}
// //                 required
// //               />
// //             </div>
// //             <div className="input-section">
// //               <input
// //                 type="email"
// //                 name="email"
// //                 placeholder="Email"
// //                 value={formData.email}
// //                 onChange={handleChange}
// //                 required
// //               />
// //             </div>
// //             <div className="input-section">
// //               <textarea
// //                 name="message"
// //                 placeholder="Hi Maisie..."
// //                 value={formData.message}
// //                 onChange={handleChange}
// //                 required
// //               ></textarea>
// //             </div>
// //             <div className="button-container">
// //               <button type="submit" className="contact-button">
// //                 Send message
// //               </button>
// //             </div>
// //           </form>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default ContactForm;

// import React, { useState } from "react";

// function ContactForm() {
//   let [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: ""
//   });

//   let handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   let handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       let response = await fetch("/submit-form", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData)
//       });

//       if (response.ok) {
//         // Form submission successful
//         alert("Thank you for your message. It has been sent.");
//         setFormData({
//           name: "",
//           email: "",
//           message: ""
//         });
//       } else {
//         // Handle server errors or invalid responses
//         alert("There was a problem with your submission. Please try again.");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       alert("An error occurred. Please try again later.");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         name="name"
//         placeholder="Name"
//         value={formData.name}
//         onChange={handleChange}
//         required
//       />
//       <input
//         type="email"
//         name="email"
//         placeholder="Email"
//         value={formData.email}
//         onChange={handleChange}
//         required
//       />
//       <textarea
//         name="message"
//         placeholder="Message"
//         value={formData.message}
//         onChange={handleChange}
//         required
//       ></textarea>
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// export default ContactForm;

import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form name="contact" method="POST" data-netlify="true">
      <input type="hidden" name="form-name" value="contact" />
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;
