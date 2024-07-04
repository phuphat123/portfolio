import { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import LIIcon from '../../images/icons/linkedin-light.svg';
import GHIcon from '../../images/icons/github-light.svg';
import emailjs from 'emailjs-com';


// Styled components for the contact section
const ContactContainer = styled(motion.div)`
  width: 100vw;
  
  padding: 50px 20px;
  background-color: transparent;
  text-align: center;
   
  @media (max-width: 768px) {
    padding: 0px 100px 0px 100px;
    
  }
  
  
`;

const ContactTitle = styled.h2`
  font-size: 2em;
  color: black;
  margin-bottom: 20px;
`;

const Form = styled.form`
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;


 
`;

const Input = styled.input`
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-family: 'Michroma', sans-serif;
  background-color: white;
  color: black;
`;

const Textarea = styled.textarea`
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-family: 'Michroma', sans-serif;
  background-color: white;
  color: black;
  
`;

const Button = styled.button`
  padding: 10px 20px;
  margin-top: 20px;
  border: none;
  border-radius: 5px;
  background-color: red;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: white;
    color: black;
  }
`;

const ContactInfo = styled.div`
  margin-top: 40px;
  color: black;
`;

const SocialMediaIcons = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  gap: 10px;

`;

const SocialMediaLink = styled.a`
  display: inline-block;
  width: 40px;
  height: 40px;
  img {
    width: 100%;
    height: 100%;
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send form data using EmailJS
    emailjs.send(
      'service_v2m4sei', // Replace with your EmailJS service ID
      'template_qzu802n', // Replace with your EmailJS template ID
      formData,
      'dlCtSikcESvI0PCaV' // Replace with your EmailJS user ID
    )
    .then((result) => {
      console.log(result.text);
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' }); // Clear form fields
    }, (error) => {
      console.log(error.text);
      alert('Failed to send message. Please try again later.');
    });
  };



  return (
    <ContactContainer
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <ContactTitle>Contact Me</ContactTitle>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <Input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <Textarea
          name="message"
          placeholder="Your Message"
          rows="10"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <Button type="submit">Send Message</Button>
      </Form>
      <ContactInfo>
        <p>Email: phuphatz@gmail.com</p>
        <p>Phone: +44 7542854633</p>
        <SocialMediaIcons>
          <SocialMediaLink href="https://www.linkedin.com/in/phuphat-p-82a15127b/" target="_blank" rel="noopener noreferrer">
            <img src={LIIcon} alt="LinkedIn" />
          </SocialMediaLink>
          <SocialMediaLink href="https://github.com/phuphat123" target="_blank" rel="noopener noreferrer">
            <img src={GHIcon} alt="GitHub" />
          </SocialMediaLink>
        </SocialMediaIcons>
        
      </ContactInfo>
    </ContactContainer>
  );
};

export default Contact;
