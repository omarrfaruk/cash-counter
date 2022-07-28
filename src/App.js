import './App.css'
import Receipt from './components/Receipt';
import { ToastContainer } from 'react-toastify'

function App() {
  return (
    <div>
      <Receipt />
      <ToastContainer />
    </div>
  );
}

export default App;
