import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "../components/footer/Footer";
import NavBar from "../components/navbar/NavBar";
import PrivateRouter from "./PrivateRouter";
import Details from "../pages/details/Details";

import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import NotFound from "../pages/notfound/NotFound";
import Register from "../pages/login/Register";
import CreateRecipe from "../pages/createrecipe/CreateRecipe";
import CommunityRecipe from "../pages/communityrecipe/CommunityRecipe";
import ChatRoom from "../pages/ChatRoom/ChatRoom";
// import { useEffect } from "react";

const AppRouter = () => {
  return (
    <BrowserRouter>
      {/* {userInfo ? <NavBar /> : null} */}
      <NavBar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<PrivateRouter />}>
          <Route path="/home" element={<Home />} />
        </Route>
        <Route path="/details" element={<PrivateRouter />}>
          <Route path="/details" element={<NotFound />} />
          <Route path="/details/:recipe" element={<Details />} />
        </Route>
        <Route path="/create-recipe" element={<PrivateRouter />}>
          <Route path="/create-recipe" element={<CreateRecipe />} />
        </Route>
        <Route path="/community-recipe" element={<PrivateRouter />} >
          <Route path="/community-recipe" element={<CommunityRecipe />} />
        </Route>

        <Route path="/Chatroom" element={<PrivateRouter />} >
          <Route path="/Chatroom" element={<ChatRoom />} />
        </Route>

        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRouter;
