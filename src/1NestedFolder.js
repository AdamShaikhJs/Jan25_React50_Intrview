import React, { useState } from "react";

const data = [
  {
    id: 1,
    name: "Folder 1",
    type: "folder",
    children: [
      { id: 2, name: "File 1-1", type: "file" },
      {
        id: 3,
        name: "Folder 1-2",
        type: "folder",
        children: [
          { id: 4, name: "File 1-2-1", type: "file" },
          { id: 5, name: "File 1-2-2", type: "file" },
        ],
      },
    ],
  },
  {
    id: 6,
    name: "Folder 2",
    type: "folder",
    children: [{ id: 7, name: "File 2-1", type: "file" }],
  },
];

const Folder = ({ data }) => {
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (id) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>
          {item.type === "folder" ? (
            <>
              <p onClick={() => toggleExpand(item.id)}>
                 📁 {item.name} {expanded[item.id] ? "-" : "+"}
              </p>
              {expanded[item.id] && item.children && <Folder data={item.children} />}
            </>
          ) : (
            <p>📃 {item.name}</p>
          )}
        </div>
      ))}
    </div>
  );
};

const FolderMain = () => (
  <main>
    <h3>Folder Viewer</h3>
    <Folder data={data} />
  </main>
);

export default FolderMain;
