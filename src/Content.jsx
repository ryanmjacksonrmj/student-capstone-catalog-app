import { CapstoneIndex } from "./CapstoneIndex"

export function Content() {

  const capstones = [
    {id: 1, capstone_name: "Capstone 1", student_name: "John Smith", capstone_url: "http://www.google.com", screenshot_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/310px-Placeholder_view_vector.svg.png" },
    {id: 2, capstone_name: "Capstone 2", student_name: "Jane Smith", capstone_url: "http://www.google.com", screenshot_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/310px-Placeholder_view_vector.svg.png" },
    {id: 3, capstone_name: "Capstone 3", student_name: "Jake Smith", capstone_url: "http://www.google.com", screenshot_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/310px-Placeholder_view_vector.svg.png" },
    {id: 4, capstone_name: "Capstone 4", student_name: "Jamie Smith", capstone_url: "http://www.google.com", screenshot_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/310px-Placeholder_view_vector.svg.png" },
    {id: 5, capstone_name: "Capstone 5", student_name: "Joseph Smith", capstone_url: "http://www.google.com", screenshot_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/310px-Placeholder_view_vector.svg.png" },
    {id: 6, capstone_name: "Capstone 6", student_name: "Jolly Smith", capstone_url: "http://www.google.com", screenshot_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/310px-Placeholder_view_vector.svg.png" },
    {id: 7, capstone_name: "Capstone 7", student_name: "Jonas Smith", capstone_url: "http://www.google.com", screenshot_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/310px-Placeholder_view_vector.svg.png" },
    {id: 8, capstone_name: "Capstone 8", student_name: "Jenny Smith", capstone_url: "http://www.google.com", screenshot_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/310px-Placeholder_view_vector.svg.png" },
    {id: 9, capstone_name: "Capstone 9", student_name: "Jacob Smith", capstone_url: "http://www.google.com", screenshot_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/310px-Placeholder_view_vector.svg.png" },
    {id: 10, capstone_name: "Capstone 10", student_name: "Jupiter Smith", capstone_url: "http://www.google.com", screenshot_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/310px-Placeholder_view_vector.svg.png" },



    // Capstone Name
// Student Name
// Description
// URL
// Screenshot (Optional)

  ]
  return (
  <div>
    <h1>Placeholder</h1>
    <CapstoneIndex capstones={capstones} />
  </div>
  )
}
