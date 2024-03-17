import './App.css'
import {Routes, Route} from 'react-router-dom'
import SigninForm from './auth/forms/SigninForm'
import { Home } from './root/pages'
import SignupForm from './auth/forms/SignupForm'
import AuthLayout from './auth/forms/AuthLayout/AuthLayout'
import RootLayout from './root/RootLayout'


const App = () => {
  return (
    <main className='main'>
        <Routes>
            {/* public routes */}
            <Route element={<AuthLayout/>}>
            <Route path='/sign-in' element={<SigninForm/>}/>
            <Route path='/sign-up' element={<SignupForm/>}/>
            </Route>


            {/* prvate routes */}
            <Route element={<RootLayout/>}>
            <Route index element={<Home/>}/>
            </Route>

        </Routes>

    </main>
  )
}

export default App