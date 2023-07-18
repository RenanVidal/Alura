import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Opening from "./pages/Opening";
import Menu from "./Components/Menu/Index";
import Baseboard from "Components/Baseboard";
import DefaultPage from "Components/DefaultPage";
import Post from "pages/Post";
import NotFind from "pages/NotFind";
import ScrollToTop from "Components/ScrollToTop";

function AppRoutes() {
  return (
    <BrowserRouter>

      <ScrollToTop />
      <Menu />
      
      <Routes>
        <Route path="/" element={<DefaultPage />}>
          <Route index element={<Opening />} />
          <Route path="sobre-mim" element={<About />} />
          
        </Route>
        <Route path="posts/:id/*" element={<Post />} />
        <Route path="*" element={<NotFind />}/>
      </Routes>

      <Baseboard />
    </BrowserRouter>
  )
}

export default AppRoutes;
