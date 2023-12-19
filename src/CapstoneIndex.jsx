export function CapstoneIndex(props) {
  return (
    <div>
      <h1>All capstones</h1>
      {props.capstones.map((capstone) => (
        <div key={capstone.id}>
          <p>{capstone.capstone_name}</p>
          <p>{capstone.student_name}</p>
          <p>
            <a href={capstone.capstone_url}>Visit the Capstone</a>
          </p>
          <img src={capstone.screenshot_url} />
        </div>
      ))}
    </div>
  );
}
