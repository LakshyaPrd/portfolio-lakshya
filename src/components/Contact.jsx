import { useState } from 'react';
import emailjs from 'emailjs-com';
import {motion} from "framer-motion";
import "../index.css";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('Sending...');

    emailjs
      .send(
        'service_z9nhalv',
        'template_75ml66c',
        {
          user_name: formData.name,
          user_email: formData.email,
          user_message: formData.message,
        },
        'gMFra64iO4C_04sA2'
      )
      .then(() => {
        setFormStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' }); // Reset the form
      })
      .catch((error) => {
        console.error('Error sending message:', error);
        setFormStatus('Error occurred while sending the message.');
      });
  };

  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h2
      id='contact'
      whileInView={{opacity:1,y:0}}
      initial={{opacity:0,y:-100}}
      transition={{duration:1.5}}
       className='my-10 text-center text-4xl'>Contact <span className="text-neutral-500">Me</span></motion.h2>
      
      <div className="max-w-lg mx-auto  p-6 rounded-lg shadow-lg">
      <motion.form
      onSubmit={handleSubmit}
      className="styled-form"
      whileInView={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: 100 }}
      transition={{ duration: 1 }}
    >
      <motion.label
      whileInView={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: 100 }}
      transition={{ duration: 1 }}
        htmlFor="name"
        className="block text-sm font-medium text-neutral-400 mb-2"
      >
        Name:
      </motion.label>
      <motion.input
      whileInView={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: 100 }}
      transition={{ duration: 1,delay:0.5 }}
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Enter your name"
        required
        className="w-full bg-neutral-800 text-neutral-300 border border-neutral-700 rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
      />

      <motion.label
      whileInView={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: 100 }}
      transition={{ duration: 1,delay:0.5 }}
        htmlFor="email"
        className="block text-sm font-medium text-neutral-400 mb-2"
      >
        Email:
      </motion.label>
      <motion.input
      whileInView={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: 100 }}
      transition={{ duration: 1,delay:1 }}
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Enter your email"
        required
        className="w-full bg-neutral-800 text-neutral-300 border border-neutral-700 rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
      />

      <motion.label
      whileInView={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: 100 }}
      transition={{ duration: 1,delay:1 }}
        htmlFor="message"
        className="block text-sm font-medium text-neutral-400 mb-2"
      >
        Message:
      </motion.label>
      <motion.textarea
      whileInView={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: 100 }}
      transition={{ duration: 1,delay:1.5 }}
        id="message"
        name="message"
        rows="5"
        value={formData.message}
        onChange={handleChange}
        placeholder="Write your message here..."
        required
        className="w-full bg-neutral-800 text-neutral-300 border border-neutral-700 rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 resize-none"
      ></motion.textarea>

      <motion.button
      whileInView={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: 100 }}
      transition={{ duration: 1 }}
        type="submit"
        className="bg-cyan-500 text-neutral-900 px-4 py-2 rounded-lg font-semibold w-full mt-4 hover:bg-cyan-600 transition-all"
      >
        Send Message
      </motion.button>
    </motion.form>
        {formStatus && <p className="text-center text-sm mt-4">{formStatus}</p>}
      </div>
    </div>
  );
};

export default Contact;
