import axios from "axios";
import { CapstonesShow } from "./CapstonesShow";
import { useState } from "react";
import { Modal } from "./Modal";

export function Content() {
  const [isCapstonesShowVisible, setIsCapstonesShowVisible] = useState(false);
  const [currentCapstone, setCurrentCapstone] = useState({});

  const handleShowCapstone = (capstone) => {
    setIsCapstonesShowVisible(true);
    setCurrentCapstone(capstone);
  };

  const handleClose = () => {
    setIsCapstonesShowVisible(false);
  };
  return (
    <div>
      <h1>Placeholder</h1>
      <Modal show={isCapstonesShowVisible} onClose={handleClose}>
        <CapstonesShow capstone={currentCapstone} />
      </Modal>
    </div>
  );
}
