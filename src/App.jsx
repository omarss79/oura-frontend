import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
// import Header from './components/Header'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Register from './pages/Register'
import Movie from './pages/Movie'
import NotFound from './pages/NotFound'
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"

function App() {

  return (
    <>      
      <Router>
      <NavBar />
      <div className='container'>
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/movie/:movieId' element={<Movie />} />
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
          <Footer />
        </div>
      </Router>
      <ToastContainer />
    </>
  )
}

export default App
