import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Layout';
import Slider from './slider';
import Features from './features';
import Home from './Home';
import Projects from './projects';
import Resume from './resume';
import Contact from './contact';

const router = createBrowserRouter([
  {
    path:"",
    element:<Layout/>,
    children:[
      {
        path:"",
        element:<Home/>
      },
      {
        path:"features",
        element:<Features />
      },
      {
        path:"projects",
        element:<Projects />
      },
      {
        path:"resume",
        element:<Resume />
      },
      {
        path:"contact",
        element:<Contact />
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider  router={router}/>
  </React.StrictMode>
);

reportWebVitals();
