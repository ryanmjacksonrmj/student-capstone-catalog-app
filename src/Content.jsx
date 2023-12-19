//import axios from "axios";
import { CapstonesShow } from "./CapstonesShow";
import { CapstoneIndex } from "./CapstoneIndex";
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

  const capstones = [
    {
      id: 1,
      capstone_name: "Capstone 1",
      student: {first_name: "John", last_name: "Smith"},    
      capstone_url: "http://www.google.com",
      screenshot_url:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/310px-Placeholder_view_vector.svg.png",
    },
    {
      id: 2,
      capstone_name: "Capstone 2",
      student: {first_name: "Jane", last_name: "Smith"},    
      capstone_url: "http://www.google.com",
      screenshot_url:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/310px-Placeholder_view_vector.svg.png",
    },
    {
      id: 3,
      capstone_name: "Capstone 3",
      student: {first_name: "Jake", last_name: "Smith"},   
      capstone_url: "http://www.google.com",
      screenshot_url:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/310px-Placeholder_view_vector.svg.png",
    },
    {
      id: 4,
      capstone_name: "Capstone 4",
      student: {first_name: "Jamie", last_name: "Smith"},   
      capstone_url: "http://www.google.com",
      screenshot_url:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/310px-Placeholder_view_vector.svg.png",
    },
    {
      id: 5,
      capstone_name: "Capstone 5",
      student: {first_name: "Joseph", last_name: "Smith"},   
      capstone_url: "http://www.google.com",
      screenshot_url:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/310px-Placeholder_view_vector.svg.png",
    },
    {
      id: 6,
      capstone_name: "Capstone 6",
      student: {first_name: "Jolly", last_name: "Smith"},   
      capstone_url: "http://www.google.com",
      screenshot_url:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/310px-Placeholder_view_vector.svg.png",
    },
    {
      id: 7,
      capstone_name: "Capstone 7",
      student: {first_name: "Jonas", last_name: "Smith"},   
      capstone_url: "http://www.google.com",
      screenshot_url:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/310px-Placeholder_view_vector.svg.png",
    },
    {
      id: 8,
      capstone_name: "Capstone 8",
      student: {first_name: "Jenny", last_name: "Smith"},   
      capstone_url: "http://www.google.com",
      screenshot_url:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/310px-Placeholder_view_vector.svg.png",
    },
    {
      id: 9,
      capstone_name: "Capstone 9",
      student: {first_name: "Jacob", last_name: "Smith"},   
      capstone_url: "http://www.google.com",
      screenshot_url:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/310px-Placeholder_view_vector.svg.png",
    },
    {
      id: 10,
      capstone_name: "Capstone 10",
      student: {first_name: "Jupiter", last_name: "Smith"},      
      capstone_url: "http://www.google.com",
      screenshot_url:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/310px-Placeholder_view_vector.svg.png",
    },
  ];
  return (
    <div>
      <h1>Placeholder</h1>
      <CapstoneIndex capstones={capstones} onShowCapstone={handleShowCapstone} />
      <Modal show={isCapstonesShowVisible} onClose={handleClose}>
        <CapstonesShow capstone={currentCapstone} />
      </Modal>
    </div>
  );
}
