import React, { useState } from 'react';
const questions = [
    { id: 1, title: 'What is React?', info: 'React is a JavaScript library for building user interfaces.' },
    { id: 2, title: 'What is JSX?', info: 'JSX is a syntax extension for JavaScript, commonly used with React to describe UI elements.' },
    { id: 3, title: 'What are hooks?', info: 'Hooks are functions that let you use state and lifecycle features in functional components.' },
  ];

const Accordion = () => {
  const [activeId, setActiveId] = useState(null);
  const toggle = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div className="accordion">
        
      <h3 className="accordion-heading">Accordion / FAQs</h3>

      {questions.map(({ id, title, info }) => (
        <div className="item">
          <header  key={id} className="header">
            <h5 className="title">{title}</h5>
            <p onClick={() => toggle(id)}>
              {activeId === id ? "hide" : "show"}
            </p>
          </header>
          {activeId === id && <p className="info">{info}</p>}
        </div>
      ))}

    </div>
  );
};

export default Accordion;
