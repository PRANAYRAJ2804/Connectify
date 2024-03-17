import { Navigate, Outlet } from "react-router-dom";
import './AuthLayout.css'

const AuthLayout = () => {
const isAuthenticated = false;

  return (
    <>
    {isAuthenticated ? (
      <Navigate to='/'/>
    ) :(
      <>
      <section className="section">
        <Outlet/>
      </section>
      </>
    )}
    </>
  )
}

export default AuthLayout