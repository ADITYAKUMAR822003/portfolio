/** @format */

import React, { useState } from "react";
import axios from "axios";
import Title from "../layouts/Title";
import ContactLeft from "./ContactLeft";

const Contact = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const contactValidation = () => {
    if (!username) {
      setError("Username is required!");
      return false;
    }
    if (!/^[a-zA-Z\s]+$/.test(username)) {
      setError("Username contain only alphabets!");
      return false;
    }
    if (!email) {
      setError("Email Id is required!");
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address!");
      return false;
    }
    if (!subject) {
      setError("Subject is required!");
      return false;
    }
    if (!/^[a-zA-Z\s]+$/.test(subject)) {
      setError("Subject contain only alphabets!");
      return false;
    }
    if (!message) {
      setError("Message is required!");
      return false;
    }
    if (message.length > 500) {
      setError("Message cannot exceed 500 characters!");
      return false;
    }
    setError("");
    return true;
  };

  const handleSend = async (e) => {
    e.preventDefault();
    if (contactValidation()) {
      try {
        var data = {
          service_id: "service_hi7yd7r",
          template_id: "template_jfpq9vc",
          user_id: "-1NF1mlZc2wnrzML_",
          template_params: {
            from_name: username,
            from_email: email,
            to_name: subject,
            message: message,
          },
        };
        const apiUrl = "https://api.emailjs.com/api/v1.0/email/send";
        const response = await axios.post(apiUrl, data);
        console.log(response.data);
        setSuccessMsg(
          `Thank you dear ${username}, Your Messages has been sent Successfully!`
        );
        setUsername("");
        setEmail("");
        setSubject("");
        setMessage("");
      } catch (error) {
        setError(`Server is busy, please try again later.`);
      }
    }
  };

  return (
    <section
      id="contact"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="CONTACT" des="Contact With Me" />
      </div>
      <div className="w-full">
        <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
          <ContactLeft />
          <div className="w-full lgl:w-[60%] h-full py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] flex flex-col gap-8 p-4 lgl:p-8 rounded-lg shadow-shadowOne">
            <form className="w-full flex flex-col gap-4 lgl:gap-6 py-2 lgl:py-5">
              {error && (
                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce">
                  {error}
                </p>
              )}
              {successMsg && (
                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce">
                  {successMsg}
                </p>
              )}
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">
                  Your name
                </p>
                <input
                  onChange={(e) => setUsername(e.target.value)}
                  value={username}
                  className={`${
                    error === "Username is required!" && "outline-designColor"
                  } contactInput`}
                  type="text"
                />
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">
                  Email
                </p>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  className={`${
                    error === "Email Id is required!" && "outline-designColor"
                  } contactInput`}
                  type="email"
                />
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">
                  Subject
                </p>
                <input
                  onChange={(e) => setSubject(e.target.value)}
                  value={subject}
                  className={`${
                    error === "Subject is required!" && "outline-designColor"
                  } contactInput`}
                  type="text"
                />
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">
                  Message
                </p>
                <textarea
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                  className={`${
                    error === "Message is required!" && "outline-designColor"
                  } contactTextArea`}
                  cols="30"
                  rows="8"
                ></textarea>
              </div>
              <div className="w-full">
                <button
                  onClick={handleSend}
                  className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent"
                >
                  Send Message
                </button>
              </div>
              {error && (
                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce">
                  {error}
                </p>
              )}
              {successMsg && (
                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce">
                  {successMsg}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
