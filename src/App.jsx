import './App.css'
import { BrowserRouter as Router } from 'react-router-dom';
import Contact from './components/Contact'
import Education from './components/Education'
import Footer from './components/Footer'
import Header from './components/Header'
import AppRoutes from '../routes/AppRoutes';
import Project from './components/Project'
import Section1 from './components/section1'
import ScrollToHash from './components/ScrollToHash'

function App() {

  return (
    <Router>
      <ScrollToHash/>
      <AppRoutes/>
    </Router>
  )
}

export default App
