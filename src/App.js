import React from 'react'
import logo from './logo.svg';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

import Home from "./pages/Home"
import Layout from "./components/Layout"
import Header from './components/Header';
import Footer from './components/Footer';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "about",
    element: <div>About</div>,
  },
]);

function App() {

  
  return (
    <div className="App">

      <Header/>

<RouterProvider router={router} >
    <Layout/>

  </RouterProvider>
  <Footer/>
     
    </div>
  );
}

export default App;
