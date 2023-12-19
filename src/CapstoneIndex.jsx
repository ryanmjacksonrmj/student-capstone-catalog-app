import { Link } from "react-router-dom";

export function CapstoneIndex(props) {
  return (
    <div>
      <h1>All capstones</h1>
      {props.capstones.map((capstone) => (
        <div key={capstone.id}>
          <p>{capstone.capstone_name}</p>
          <p>{capstone.student.first_name}</p>
          <p>{capstone.student.last_name}</p>
          <p>{capstone.capstone_description}</p>
          <p>
            <a href={capstone.capstone_url}>Visit the Capstone</a>
          </p>
          <img src={capstone.capstone_screenshot_url} />
          <Link to={`/capstones/${capstone.id}`} onClick={() => props.onShowCapstone(capstone)}>
            More Info
          </Link>
        </div>
      ))}
    </div>
  );
}
