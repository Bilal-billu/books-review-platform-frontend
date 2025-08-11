import { AuthProvider, useLogout, useUserAuth } from "./context/AuthContext.jsx";
import { Theme } from "@radix-ui/themes";
import AppRouter from "./components/AppRouter.jsx";
import { Toaster } from "react-hot-toast";


function App() {

  return (
    <div className="bg-theme-background min-h-screen px-10">
      <AuthProvider>
        <Theme accentColor="indigo" >
          <AppRouter />   
        </Theme>
      </AuthProvider>
      <Toaster position="top-center" reverseOrder = {true} />
    </div>
  )
}

export default App
