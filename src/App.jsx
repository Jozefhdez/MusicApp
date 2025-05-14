import './App.css'
import Login from './Login/Login'
import { authFlow, getDataAuth } from './setup'
import { getToken } from './getToken'
import { useNavigate } from 'react-router-dom';

function App() {

  const navigate = useNavigate();
  const handleSetup = async() => {
    const code = await getDataAuth();
    authFlow(code);
  }

  const handleGetToken = () => {
    getToken();
    navigate('/dashboard');
  }

return (
  <div className="app-container">
    <h1 className="app-title">Music app</h1>
    <button className="app-button" onClick={handleSetup}>START SETUP</button>
    <button className="app-button" onClick={handleGetToken}>GET TOKEN</button>
  </div>
)
}

export default App
