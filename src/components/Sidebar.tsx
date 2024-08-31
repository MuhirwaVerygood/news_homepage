import { Link } from "react-router-dom"

const Sidebar = () => {
  return (
    <div className="w-[200px] h-full bg-red-400">
      <Link to='/homepage'>Home</Link>
    </div>
  )
}

export default Sidebar
