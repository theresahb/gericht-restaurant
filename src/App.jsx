import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import Contact from './pages/Contact/Contact'
import Blog from './pages/Blog/Blog'
import Landing from './pages/Landing/Landing'
import Booking from './pages/Booking/Booking'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import MealDetails from './pages/MealDetails/MealDetails'
import Meals from './components/Meals/Meals'

function App() {
  return (
    <div>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/meals' element={<Meals />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/landing' element={<Landing />} />
          <Route path='/booking' element={<Booking />} />
          <Route path='/meals/:idMeal' element={<MealDetails />} />
        </Routes>
      <Footer />
    </div>
  )
}

export default App
