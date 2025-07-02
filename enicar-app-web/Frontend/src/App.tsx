import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home/Page';
import Login from './pages/Login';
import Contact from './pages/Prediction';
import GPAForm from './pages/GPAForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/home/prediction" element={<Contact />} />
          <Route path="/home/gpa" element={<GPAForm />} />
          <Route path="/home/profile" element={<div>Mon Profil</div>} />
        </Route>
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
