import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const CrousalSimple = () => {
  const people = Array.from({ length: 10 }, (_, i) => ({
    id: i,
    name: `People-${i * 10}`,
  }));
  const [index, setIndex] = useState(0);

  
  const checkNumber = (num) => (num + people.length) % people.length;
  const nextPerson = () => setIndex((i) => checkNumber(i + 1));
  const prevPerson = () => setIndex((i) => checkNumber(i - 1));
  

  return (
    <main>
      <h3>Crousal Review</h3>
      <article className="review">
        <h4>{people[index].name}</h4>
        <div className="btn-container">
          <button onClick={prevPerson}>
            <FaChevronLeft />
          </button>
          <button onClick={nextPerson}>
            <FaChevronRight />
          </button>
        </div>
      </article>
    </main>
  );
};

export default CrousalSimple;
