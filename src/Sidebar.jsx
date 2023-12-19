import { Link } from "react-router-dom";
import { useState } from "react";

export function Sidebar(props) {
  const [searchTerm, setSearchTerm] = useState("");
  console.log(props);
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("footer-id").style.marginLeft = "0";
  }
  return (
    <div id="mySidenav" className="sidenav">
      <Link className="closebtn" onClick={closeNav}>
        &times;{" "}
      </Link>
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
      {props.capstones.map((capstone) => (
        <div key={capstone.id}>
          <div className="card2">
            <ul>
              <li>
                {capstone.student.last_name}, {capstone.student.first_name}{" "}
              </li>
              <li>
                <Link to="/">{capstone.capstone_name}</Link>{" "}
              </li>
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
