import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ContactForm from "../ContactForm/ContactForm";

function LiveWebsites() {
  return (
    <div>
      <Header />

      {/* First Section */}
      <section>
        <h2>Section 1</h2>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img src="/assets/imgs/" alt="Website 1" />
          <img src="image2.jpg" alt="Website 2" />
        </div>
      </section>

      {/* Second Section */}
      <section>
        <h2>Section 2</h2>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img src="image3.jpg" alt="Website 3" />
          <img src="image4.jpg" alt="Website 4" />
        </div>
      </section>

      <ContactForm />
      <Footer />
    </div>
  );
}

export default LiveWebsites;
