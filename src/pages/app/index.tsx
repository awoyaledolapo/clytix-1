import { Routes,Route, Navigate } from "react-router"
import Dashboard from "./Dashboard"

const loggedFlow = () => {


  return (
    <Routes>
        <Route  path='/' element={<Dashboard/>}/>
        <Route  path='*' element={<Navigate to='/'/>}/>
    </Routes>
  )
}
export default loggedFlow