import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Layout from './componants/layout/layout'
// import Home from './pages/Home/Home'
import About from './pages/About/About'

import reportWebVitals from './reportWebVitals';
import { Outlet, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      {/* <Route path='' element={<Home/>}/> */}
      <Route path='/about' element={<About/>}/>
      {/* <Route path='/contact' element={<Contact/>}/> */}
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
