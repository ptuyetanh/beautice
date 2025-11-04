import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import { PATHS } from './routes/paths'
import Home from './pages/Home'
import About from './pages/About'
import Service from './pages/Service'
import NotFound from './pages/NotFound'
import ScrollToTop from './components/ScrollToTop'
// import './App.css'
import "aos/dist/aos.css";
import Gallery from './pages/Gallery'

function App() {

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path={PATHS.HOME} element = {<Home/>} />
          <Route path={PATHS.ABOUT} element = {<About/>} />
          <Route path={PATHS.SERVICE} element = {<Service/>} />
          <Route path={PATHS.GALLERY} element = {<Gallery/>} />
        </Route>
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
