import emailjs from "emailjs-com";
import { useState } from "react";
import SectionTitle from "./SectionTitle";

const contactInfo = [
  { id: 1, label: "Phone", value: "+998 90 055 5940", icon: "fas fa-phone-alt" },
  {
    id: 2,
    label: "Mail",
    value: "yuldashevrozali08@gmail.com",
    icon: "fas fa-envelope",
  },
  {
    id: 3,
    label: "Visit My Studio",
    value: "KOKAND, FERGANA, UZBEKISTAN",
    icon: "fas fa-map-marker-alt",
  },
];

const Contact = () => {
  const [mailData, setMailData] = useState({
    your_name: "",      // name maydoni EmailJS da this way bo'lishi kerak
    your_email: "",     // email maydoni
    subject: "",
    message: "",
  });
  const { your_name, your_email, subject, message } = mailData;
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const onChange = (e) => {
    setMailData({ ...mailData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (
      your_name.length === 0 ||
      your_email.length === 0 ||
      message.length === 0 ||
      subject.length === 0
    ) {
      setError(true);
      return;
    }

    emailjs
      .send(
        "service_8ng542b",      // O'zing EmailJS dashboardda olgan service ID ni yozasan
        "template_tnytsn6",     // O'zing EmailJS dashboardda olgan template ID ni yozasan
        mailData,
        "VcplLT9bGY_aJ22wt"       // O'zing EmailJS dashboardda olgan public API key ni yozasan
      )
      .then(
        (response) => {
          setError(false);
          setSuccess(true);
          setTimeout(() => {
            setSuccess(false);
          }, 3000);
          setMailData({
            your_name: "",
            your_email: "",
            subject: "",
            message: "",
          });
        },
        (err) => {
          console.error("EmailJS Error:", err);
          setError(true);
          setSuccess(false);
        }
      );
  };

  return (
    <section id="contactus" className="section contactus-section bg-gray">
      <div className="container">
        <SectionTitle
          heading={"Let's Discuss Project"}
          subHeading={"Contact"}
        />
        <div className="row">
          <div className="col-lg-6">
            <div className="contact-form">
              <h6>Get in touch</h6>
              <p className="lead">
                Our friendly team would love to hear from you.
              </p>
              <form id="contact-form" onSubmit={onSubmit}>
                <div className="row gx-3 gy-4">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="form-label">First name</label>
                      <input
                        name="your_name"
                        onChange={onChange}
                        value={your_name}
                        id="name"
                        placeholder="Name *"
                        className={`form-control ${
                          error ? (your_name.length !== 0 ? "" : "invalid") : ""
                        }`}
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="form-label">Your Email</label>
                      <input
                        name="your_email"
                        onChange={onChange}
                        value={your_email}
                        id="email"
                        placeholder="Email *"
                        className={`form-control ${
                          error ? (your_email.length !== 0 ? "" : "invalid") : ""
                        }`}
                        type="email"
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <label className="form-label">Subject</label>
                      <input
                        name="subject"
                        onChange={onChange}
                        value={subject}
                        id="subject"
                        placeholder="Subject *"
                        className={`form-control ${
                          error ? (subject.length !== 0 ? "" : "invalid") : ""
                        }`}
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <label className="form-label">Your message</label>
                      <textarea
                        name="message"
                        onChange={onChange}
                        value={message}
                        id="message"
                        placeholder="Your message *"
                        rows={3}
                        className={`form-control ${
                          error ? (message.length !== 0 ? "" : "invalid") : ""
                        }`}
                      />
                    </div>
                    <span
                      id="suce_message"
                      className="text-success"
                      style={{ display: success ? "block" : "none" }}
                    >
                      Message Sent Successfully
                    </span>
                  </div>
                  <div className="col-md-12">
                    <div className="send">
                      <button
                        className="px-btn px-btn-theme2"
                        type="submit"
                        value="Send"
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-5 ms-auto col-xl-4 pt-5 pt-lg-0">
            <ul className="contact-infos">
              {contactInfo.map((contact) => (
                <li key={contact.id}>
                  <div className="icon">
                    <i className={contact.icon} />
                  </div>
                  <div className="col">
                    <h5>{contact.label}</h5>
                    <p>{contact.value}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="text-center pt-5">
              <img src="assets/img/contact.svg" className="svg" alt="image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
