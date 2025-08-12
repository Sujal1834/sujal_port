import './App.css'
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from '../routes/AppRoutes';
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
