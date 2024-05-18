import React from 'react';
import './pages.css';
const About = () => {
  let links = [
    {
      id: 1,
      link: 'https://github.com/CharanLuvsblack',
      text: 'GitHub',
    },
    {
      id: 2,
      link: 'https://www.linkedin.com/in/charanhv/',
      text: 'LinkedIn',
    },
  ];
  return (
    <>
      <div className="section">
        <div className="sectionLeft">
          <span>About Us!</span>
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

export default About;
