import logo from './logo.svg';
import './App.css';
import { Toaster } from 'react-hot-toast';
import { router } from './Router/Routes';
import { RouterProvider } from 'react-router-dom';


function App() {
  return (
    <div className="App">
		<RouterProvider router={router}></RouterProvider>
		<div><Toaster></Toaster></div>
    </div>
  );
}

export default App;
