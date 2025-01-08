import React, { useState } from "react";

const nestedMenu = [
  { label: "Home" },
  {
    label: "Services",
    children: [
      { label: "Web Development" },
      { label: "Mobile Development" },
      {
        label: "UI/UX Design",
        children: [
          { label: "Wireframes" },
          { label: "Prototypes" },
        ],
      },
    ],
  },
  { label: "About" },
  { label: "Contact" },
];

const NestedDropdownRecursion = ({ items }) => {
  const [openMenu, setOpenMenu] = useState(null);

  const handleToggle = (label) => {
    setOpenMenu((prev) => (prev === label ? null : label));
  };

  return (
    <ul>
      {items.map((item) => (
        <li key={item.label} className="dropdown-item">
          <span
            onClick={() => item.children && handleToggle(item.label)}
          >
            {item.label} {item.children ? openMenu? "⤴️":"🔽": null}
          </span>
          {item.children && openMenu === item.label && (
            <NestedDropdownRecursion items={item.children} />
          )}
        </li>
      ))}
    </ul>
  );
};

const NestedDropdownRecursion1 = () => (
  <main>
    <h6>Nested Dropdown</h6>
    <NestedDropdownRecursion items={nestedMenu} />
  </main>
);

export default NestedDropdownRecursion1;
