export function CapstonesShow(props) {
  return (
    <div>
      <h1>Capstone Info</h1>
      <h2>{props.capstone.name}</h2>
      <p>{props.capstone.description}</p>
      <p>{props.capstone.url}</p>
    </div>
  );
}
