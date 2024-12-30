import authLayout from "./components/auth/layout";
import authLogin from "./pages/auth/login";
import authRegister from "./pages/auth/register";

function App() {

  return (
    <div className="flex flex-col overflow-hidden bg-white">
      <h1>Header Component</h1>

      <Routes>
        <Route path="/auth" element={<authLayout />}>
          <Route path="login"element={<authLogin />} />
          <Route path="register"element={<authRegister />} />
        </Route>
      </Routes>


   </div>
  )
}

export default App
