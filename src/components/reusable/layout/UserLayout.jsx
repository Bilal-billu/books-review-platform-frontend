import Navigation from "../Navigation";
// import { Outlet } from "react-router-dom";
const UserLayout = ({ el }) => {
  return (
    <div
      className="space-y-2 max-w-screen-xl mx-auto"
    >
      <Navigation />
      {el}
    </div>
  )
}


export default UserLayout;