//import axios from "axios";
import { CapstonesShow } from "./CapstonesShow";
import { CapstoneIndex } from "./CapstoneIndex";
import { useState } from "react";
import { Sidebar } from "./Sidebar";
import { Route, Routes } from "react-router-dom";

export function Content() {
  function openNav() {
    document.getElementById("mySidenav").style.display = "block";
  }
  function closeNav() {
    document.getElementById("mySidenav").style.display = "none";
  }

  const [currentCapstone, setCurrentCapstone] = useState({});

  const handleShowCapstone = (capstone) => {
    setCurrentCapstone(capstone);
  };

  const capstones = [
    {
      id: 1,
      capstone_name: "Capstone 1",
      student: { first_name: "John", last_name: "Smith" },
      capstone_url: "http://www.google.com",
      screenshot_url:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/310px-Placeholder_view_vector.svg.png",
    },
    {
      id: 2,
      capstone_name: "Capstone 2",
      student: { first_name: "Jane", last_name: "Smith" },
      capstone_url: "http://www.google.com",
      screenshot_url:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/310px-Placeholder_view_vector.svg.png",
    },
    {
      id: 3,
      capstone_name: "Capstone 3",
      student: { first_name: "Jake", last_name: "Smith" },
      capstone_url: "http://www.google.com",
      screenshot_url:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/310px-Placeholder_view_vector.svg.png",
    },
    {
      id: 4,
      capstone_name: "Capstone 4",
      student: { first_name: "Jamie", last_name: "Smith" },
      capstone_url: "http://www.google.com",
      screenshot_url:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/310px-Placeholder_view_vector.svg.png",
    },
    {
      id: 5,
      capstone_name: "Capstone 5",
      student: { first_name: "Joseph", last_name: "Smith" },
      capstone_url: "http://www.google.com",
      screenshot_url:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/310px-Placeholder_view_vector.svg.png",
    },
    {
      id: 6,
      capstone_name: "Capstone 6",
      student: { first_name: "Jolly", last_name: "Smith" },
      capstone_url: "http://www.google.com",
      screenshot_url:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/310px-Placeholder_view_vector.svg.png",
    },
    {
      id: 7,
      capstone_name: "Capstone 7",
      student: { first_name: "Jonas", last_name: "Smith" },
      capstone_url: "http://www.google.com",
      screenshot_url:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/310px-Placeholder_view_vector.svg.png",
    },
    {
      id: 8,
      capstone_name: "Capstone 8",
      student: { first_name: "Jenny", last_name: "Smith" },
      capstone_url: "http://www.google.com",
      screenshot_url:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/310px-Placeholder_view_vector.svg.png",
    },
    {
      id: 9,
      capstone_name: "Capstone 9",
      student: { first_name: "Jacob", last_name: "Smith" },
      capstone_url: "http://www.google.com",
      screenshot_url:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/310px-Placeholder_view_vector.svg.png",
    },
    {
      id: 10,
      capstone_name: "Capstone 10",
      student: { first_name: "Jupiter", last_name: "Smith" },
      capstone_url: "http://www.google.com",
      screenshot_url:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/310px-Placeholder_view_vector.svg.png",
    },
  ];
  return (
    <div id="main">
      <h1>Capstones</h1>
      <Sidebar capstones={capstones} />
      <button onClick={openNav}>Open Sidebar</button>
      <button onClick={closeNav}>Close Sidebar</button>
      <Routes>
        <Route path="/" element={<CapstoneIndex capstones={capstones} onShowCapstone={handleShowCapstone} />} />
        <Route path="/capstones/:capstoneId" element={<CapstonesShow capstone={currentCapstone} />} />
      </Routes>
    </div>
  );
}
