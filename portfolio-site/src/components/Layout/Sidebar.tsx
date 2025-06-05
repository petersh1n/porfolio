import React from "react";

export const Sidebar: React.FC = () => {
  const [section, setSection] = React.useState<string>("Home");

  const sectionClick = (item: string) => {
    setSection(item);
  };

  const menuItems = ["Home", "Work", "ReviewNote", "MySelf", "Hobby"];

  return (
    <div className="Sidebar">
      <ul>
        {menuItems.map((item) => (
          <li>
            <button
              onClick={() => {
                sectionClick(item);
              }}
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
      <p>{section}</p>
    </div>
  );
};
