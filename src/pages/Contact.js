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
        <div className="sectionLeft">
          <span>Let's have a Talk!</span>
        </div>
        <div className="sectionRight">
          {links.map((l) => (
            <a
              className="link"
              key={l.id}
              href={l.link}
              target="_blank"
              rel="noreferrer"
            >
              {l.text}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Contact;
