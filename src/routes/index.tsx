import { Routes, Route } from "react-router-dom";
import NotFound from "../pages/NotFoundPage";
import User from "../pages/UserPage";

const Router = () => {

  return (
    <Routes>
        <Route path='*' element={<NotFound />} />
        <Route path="byecar">
          <Route path=":token" element={<User />} />
        </Route>
    </Routes>
  );
};

export default Router;
