import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Routes/router';
import FacebookChat from './components/FacebookChat/FacebookChat';

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
      <FacebookChat />
    </div>
  );
}

export default App;
