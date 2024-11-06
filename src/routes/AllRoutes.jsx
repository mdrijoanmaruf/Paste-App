import { Route, Routes } from "react-router-dom";
import React from "react";
import HomePage from "../pages/HomePage";
import CreatePost from "../pages/CreatePost";
import PageNotFound from "../pages/PageNotFound";
import ProtectedRoutes from "./ProtectedRoutes";

const AllRoutes = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="create" element={<ProtectedRoutes> <CreatePost /></ProtectedRoutes>  }></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </main>
  );
};

export default AllRoutes;
