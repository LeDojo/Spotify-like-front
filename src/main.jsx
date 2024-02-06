import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./bootstrap.min.css";
import App from "./App";
import Playlist from "./pages/Playlist";
import HomePage from "./pages/HomePage";
import NewPlaylist from "./pages/NewPlaylist";
import NewSong from "./pages/NewSong";
import { AuthProvider } from "./AuthContext";
import Login from "./pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "playlist/:playlistId",
        element: <Playlist />,
      },
      {
        path: "new-playlist",
        element: <NewPlaylist />,
      },
      {
        path: "new-song",
        element: <NewSong />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
