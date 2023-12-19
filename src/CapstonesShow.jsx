export function CapstonesShow(props) {
  return (
    <div>
      <h1>Capstone Info</h1>
      <p>{props.capstone.capstone_name}</p>
      <p>{props.capstone.student_name}</p>
      <p>
        <a href={props.capstone.capstone_url}>Visit the Capstone</a>
      </p>
      <img src={props.capstone.screenshot_url} />
    </div>
  );
}
