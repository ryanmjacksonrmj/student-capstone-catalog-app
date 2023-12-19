export function CapstoneIndex(props) {
  return (
    <div>
      <h1>All capstones</h1>
      {props.capstones.map((capstone) => (
        <div key={capstone.id}>
          <p>{props.capstone.capstone_name}</p>
          <p>{props.capstone.student_name}</p>
          <p>{props.capstone.capstone_description}</p>
          <p>
            <a href={props.capstone.capstone_url}>Visit the Capstone</a>
          </p>
          <img src={props.capstone.capstone_screenshot_url} />
          <button onClick={() => props.onShowCapstone(capstone)}>More Info</button>
        </div>
      ))}
    </div>
  );
}
