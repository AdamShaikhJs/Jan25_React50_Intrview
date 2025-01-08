import { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
const people = [
    {
      id: 1,
      name: 'Susan Smith',
      job: 'Web Developer',
      image: 'https://www.course-api.com/images/people/person-1.jpeg',


      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',

    },
    {
      id: 2,
      name: 'John Doe',
      job: 'Graphic Designer',
      image: 'https://www.course-api.com/images/people/person-3.jpeg',
      text: 'Aenean commodo ligula eget dolor. Aenean massa.',
    },
    {
      id: 3,
      name: 'Anna Johnson',
      job: 'Project Manager',
      image: 'https://www.course-api.com/images/people/person-4.jpeg',
      text: 'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.',
    },
  ];
  
const CrousalReview = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];
  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };
  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };
  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
  };

  return (
    <main>
      <h3 className="accordion-heading">Crousal Review</h3>

      <article className='review'>
        <div className='img-container'>
          <img src={image} alt={name} className='person-img' />
          <span className='quote-icon'>
            <FaQuoteRight />
          </span>
        </div>
        <h4 className='author'>{name}</h4>
        <p className='info'>{job} -{text}</p>

        <div className='btn-container'>
          <button  onClick={prevPerson}>
            <FaChevronLeft />
          </button>
          <button  onClick={nextPerson}>
            <FaChevronRight />
          </button>
        </div>
        <button className=' btn-hipster' onClick={randomPerson}>
          surprise me
        </button>
      </article>
    </main>
  );
};

export default CrousalReview;