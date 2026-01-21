import { useState } from "react";
import { projectGallery } from "../constant";
import Project from "./Project";

const MousemoveRevealGallery = () => {
  const [modal, setModal] = useState({ active: false, index: 0 });
  return (
    <main>
      <div>
        {projectGallery.map((item, index) => (
          <Project key={index} title={item.title} setModal={setModal} />
        ))}
      </div>
    </main>
  );
};

export default MousemoveRevealGallery;
