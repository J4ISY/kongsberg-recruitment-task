import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import LandingPage from "./components/LandingPage.jsx";
import BigView from "./components/BigView.jsx";
import Error from "./components/Error.jsx";

const router = createBrowserRouter([
    {
        path: '*',
        element: <Error />
    },
    {
        path: '/',
        element: <LandingPage />
    },
    {
        path: '/:postId',
        element: <BigView />
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
