import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './pages/home'
import Login from './pages/login'
import Signup from './pages/signUp'
import Learn from './pages/Learn/learn'
function App() {
 

  return (
   
   <div>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/learn" element={<Learn/>}/>
    </Routes>
    </BrowserRouter>
   </div>
  )
}

export default App
