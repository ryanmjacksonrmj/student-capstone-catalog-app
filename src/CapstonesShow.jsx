export function CapstonesShow(props) {
  console.log(props);
  return (
    <div className="card">
      <h1>Capstone Info</h1>
      <br />
      <h2>{props.capstone.capstone_name}</h2>
      <p>
        {props.capstone.student.first_name} {props.capstone.student.last_name}{" "}
      </p>
      <p>{props.capstone.capstone_description}</p>
      <p>
        <a href={props.capstone.capstone_url}>Visit the Capstone</a>
      </p>
      <img src={props.capstone.capstone_screenshot_url} />
    </div>
  );
}
