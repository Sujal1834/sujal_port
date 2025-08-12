import React from 'react'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
     const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_pzpbdkp',     // replace with your EmailJS service ID
      'template_fstizsk',    // replace with your EmailJS template ID
      form.current,
      'bcQcjSj4sj9vwgHdX'      // replace with your EmailJS public key
    ).then(
      (result) => {
        alert('Message sent successfully!');
        form.current.reset();
      },
      (error) => {
        alert('Something went wrong. Please try again.');
        console.error(error);
      }
    );
  };


  return (
    <section className="bg-slate-200 text-white py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Left Side - Contact Info */}
        <div>
          <h2 className="text-3xl font-bold mb-6 text-black">Get in Touch</h2>
          <p className="text-black mb-4">Feel free to contact me for any project or collaboration.</p>
          <ul className="space-y-3 text-black">
            <li>
              📧 Email: 
              <a href="mailto:parmarsujal1410@gmail.com" className="text-violet-950 hover:underline ml-2">
                parmarsujal1410@gmail.com
              </a>
            </li>
            <li>
              📞 Phone: 
              <a href="tel:9879666236" className="text-violet-950 hover:underline ml-2">
                9879666236
              </a>
            </li>
            <li>
              📍 Address: Chandlodiya, Ahmedabad
            </li>
          </ul>
        </div>

        {/* Right Side - Contact Form */}
        <form ref={form} onSubmit={sendEmail} className="bg-white p-6 rounded-lg shadow-md space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First Name"
              name = "firstname"
              className="w-full p-3 rounded bg-slate-200 text-black border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              required
            />
            <input
              type="text"
              placeholder="Last Name"
              name = "lastname"
              className="w-full p-3 rounded bg-slate-200 text-black border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              required
            />
          </div>
          <input
            type="email"
            placeholder="Your Email"
            name = "ename"
            className="w-full p-3 rounded bg-slate-200 text-black border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            required
          />
          <textarea
            placeholder="Your Message"
            rows="4"
            name = "msg"
            className="w-full p-3 rounded bg-slate-200 text-black border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-violet-950 text-white font-medium px-6 py-3 rounded hover:bg-cyan-400 transition"
          >
            Send Message
          </button>
        </form>

      </div>
    </section>
  )
}

export default Contact