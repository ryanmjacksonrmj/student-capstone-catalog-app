import { Link } from "react-router-dom";
import { useState } from "react";

export function CapstoneIndex(props) {
  const [searchItem, setSearchItem] = useState("");
  return (
    <div>
      Search: <input type="text" value={searchItem} onChange={(event) => setSearchItem(event.target.value)} />
      {props.capstones
        .filter((capstone) => capstone.capstone_name.toLowerCase().includes(searchItem.toLowerCase()))
        .map((capstone) => (
          <div key={capstone.id}>
            <div className="card">
              <h2>{capstone.capstone_name}</h2>
              <p>
                {capstone.student.first_name} {capstone.student.last_name}{" "}
              </p>
              <p>{capstone.capstone_description}</p>
              <p>
                <a href={capstone.capstone_url}>Visit the Capstone</a>
              </p>
              <img src={capstone.capstone_screenshot_url} />
              <Link to={`/capstones/${capstone.id}`} onClick={() => props.onShowCapstone(capstone)}>
                More Info
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
}
