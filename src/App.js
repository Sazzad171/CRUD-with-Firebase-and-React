import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import FullBody from './components/FullBody';
import Loading from './components/Loading';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <FullBody/>
      <Loading />
      <ToastContainer />
    </div>
  );
}

export default App;
