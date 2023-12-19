import { Link } from "react-router-dom";

export function Sidebar(props) {
console.log(props)
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.getElementById("footer-id").style.marginLeft = "0";
}
  return (
    <div id="mySidenav" className="sidenav">
      {/* <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a> */}
      <Link className="closebtn" onClick={closeNav}>&times; </Link>
      
        {props.capstones.map((capstone) => (
        <div key={capstone.id}>
          <div className="card2">
            <ul>
          <li>{capstone.student.last_name}, {capstone.student.first_name} </li>
          <li><Link to="/">{capstone.capstone_name}</Link> </li>
          </ul>
          </div>
        </div>))}
        
    </div>
  );
}
