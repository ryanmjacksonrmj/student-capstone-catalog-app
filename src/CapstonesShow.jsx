export function CapstonesShow(props) {
  console.log(props);
  return (
    <div>
      <h1>Capstone Info</h1>
      <p>{props.capstone.capstone_name}</p>
      <p>{props.capstone.student.first_name}</p>
      <p>{props.capstone.student.last_name}</p>
      <p>{props.capstone.capstone_description}</p>
      <p>
        <a href={props.capstone.capstone_url}>Visit the Capstone</a>
      </p>
      <img src={props.capstone.capstone_screenshot_url} />
    </div>
  );
}
