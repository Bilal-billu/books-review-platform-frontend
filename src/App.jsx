import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { routesUnprotected } from "./components/reusable/routes";
import Home from "./pages/Home";
import Navigation from "./components/reusable/Navigation";


function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* {
            routesUnprotected.map(item => (
              <Route
                path={item.path}
                element = {item.element}
                key={item.path}
              />
            ))
          } */}
          <Route
            path="/"
            element = {
              <UserLayout el={<Home />} />
                
            }
          />
          <Route
            path="/:id"
            element = {
              <UserLayout el={<Home />} />
                
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App


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



