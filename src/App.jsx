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
    <>
    <h1>Hola mundo</h1>
    <button onClick={handleSetup}>START SETUP</button>
    <button onClick={handleGetToken}>GET TOKEN</button>
    </>
  )
}

export default App
