import { useState } from "react";
import { projectGallery } from "../constant";
import Project from "./Project";
import "./index.css";
import Modal from "./Modal";

const MousemoveRevealGallery = () => {
  const [modal, setModal] = useState({ active: false, index: 0 });
  return (
    <main className="main">
      <div className="body">
        {projectGallery.map((item, index) => (
          <Project
            key={index}
            title={item.title}
            setModal={setModal}
            index={index}
          />
        ))}
      </div>
      <Modal modal={modal} projects={projectGallery} />
    </main>
  );
};

export default MousemoveRevealGallery;
