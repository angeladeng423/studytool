import React from 'react';
import ReactDOM from 'react-dom/client'
import App from './App';
import Studypage from './pages/studypage'

import {
    createBrowserRouter,
    RouterProvider,
    Route,
  } from "react-router-dom";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
    },
    {
        path: "studypage",
        element: <Studypage/>
    }
  ]);  

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
      <RouterProvider router={router} />
  );