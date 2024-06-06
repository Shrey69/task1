
import './App.css';
import First from './components/First';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Second from './components/Second';
import Fourth from './components/Fourth';
import Third from './components/Third';
import Fifth from './components/Fifth';
import Sixth from './components/Sixth';
const router = createBrowserRouter([
  
  {
    path: '/',
    element: <First />,
  },
  {
    path: '/2',
    element: <Second />,
  },
  {
    path: '/3',
    element: <Third />, 
  },
  {
    path: '/4',
    element: <Fourth />,
  },
  {
    path: '/5',
    element: <Fifth />,
  },
  {
    path: '/6',
    element: <Sixth />,
  },
])
function App() {
  
  return (
   <div className=' px-6 md:px-[32rem] py-24 md:py-28 bg-slate-100 w-screen h-[100%]'>
    <form className='rounded-xl hover:shadow-xl px-10 bg-white'>
    <RouterProvider router={router} />
    </form>
    
   </div>
  );
}

export default App;
