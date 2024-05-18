import React from 'react';
import './pages.css';

const Contact = () => {
  let links = [
    {
      id: 1,
      link: 'https://www.instagram.com/charan_un.offl/',
      text: 'Instagram',
    },
    {
      id: 2,
      link: 'https://x.com/Charan_unoffl',
      text: 'Twitter / X',
    },
  ];
  return (
    <>
      <div className="section">
        <div className="title">
          <p className="titleText">Get in Touch</p>
          <p className="subtitleText">
            We’d love to hear from you! Whether you have a question, feedback,
            or just want to share your Chilltopia experience, reach out to us.
          </p>
        </div>
      </div>
    </>
  );
};

export default Contact;
