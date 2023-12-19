import { useState } from "react";

export function Sidebar(props) {
  const [searchTerm, setSearchTerm] = useState("");

  function closeNav() {
    document.getElementById("mySidenav").style.display = "none";
  }
  return (
    <div id="mySidenav" className="sidenav">
      <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>
        &times;
      </a>
      Search Capstones:{" "}
      <input
        type="text"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
        list="capstone-names"
      />
      <datalist id="capstone-names">
        {props.capstones.map((capstone) => (
          <option key={capstone.id}>{capstone.capstone_name}</option>
        ))}
      </datalist>
      <a href="#">About</a>
      <a href="#">Services</a>
      <a href="#">Clients</a>
      <a href="#">Contact</a>
    </div>
  );
}
