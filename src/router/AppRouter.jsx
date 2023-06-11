import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "../components/footer/Footer";
import NavBar from "../components/navbar/NavBar";
import PrivateRouter from "./PrivateRouter";
import Details from "../pages/details/Details";
import Detail from "../pages/communityrecipe/Detail";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import NotFound from "../pages/notfound/NotFound";
import Register from "../pages/login/Register";
import CreateRecipe from "../pages/createrecipe/CreateRecipe";
import CommunityRecipe from "../pages/communityrecipe/CommunityRecipe";
import ChatRoom from "../pages/ChatRoom/ChatRoom";
import UpdateRecipe from "../pages/createrecipe/UpdateRecipe";
import Statistics from "../pages/statistics/Statistics";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <div style={{ minHeight: '100vh', paddingBottom: '8vh' }}>
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
          <Route path="/detail" element={<PrivateRouter />}>
            <Route path="/detail" element={<NotFound />} />
            <Route path="/detail/:recipe" element={<Detail />} />
          </Route>
          <Route path="/create-recipe" element={<PrivateRouter />}>
            <Route path="/create-recipe" element={<CreateRecipe />} />
          </Route>
          <Route path="/community-recipe" element={<PrivateRouter />} >
            <Route path="/community-recipe" element={<CommunityRecipe />} />
          </Route>
          <Route path="/update-recipe/:recipeId" element={<PrivateRouter />}>
            <Route path="/update-recipe/:recipeId" element={<UpdateRecipe />} />
          </Route>
          <Route path="/Chatroom" element={<PrivateRouter />} >
            <Route path="/Chatroom" element={<ChatRoom />} />
          </Route>
          <Route path="/statistics/:recipeId" element={<PrivateRouter />} >
            <Route path="/statistics/:recipeId" element={<Statistics />} />
          </Route>
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRouter;
