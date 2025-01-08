import React, { useState } from "react";

const NestedDropdown = () => {
  const [isParentOpen, setIsParentOpen] = useState(false);
  const [isChildOpen, setIsChildOpen] = useState(false);

  const toggleParent = () => setIsParentOpen((prev) => !prev);
  const toggleChild = () => setIsChildOpen((prev) => !prev);

  return (
    <main>
      <button onClick={toggleParent} className="dropdown-btn">
        Parent Menu
      </button>
      {isParentOpen && (
        <ul className="dropdown">
          <li>
            <button onClick={toggleChild} className="dropdown-btn">
              Child Menu
            </button>
            {isChildOpen && (
              <div>
                <p>Child Option 1</p>
                <p>Child Option 2</p>
                <p>Child Option 3</p>
              </div>
            )}
          </li>
          <li>Parent Option 1</li>
          <li>Parent Option 2</li>
        </ul>
      )}
    </main>
  );
};

export default NestedDropdown;
