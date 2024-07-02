import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

import Loading from "./components/loading/loading.component";
import Notifier from "./components/notifier/notifier.component";

const Navigation = lazy(
  () => import("./routes/navigation/navigation.component")
);
const Home = lazy(() => import("./routes/home/home.component"));
const Recipes = lazy(() => import("./routes/recipes/recipes.component"));
const Restaurants = lazy(
  () => import("./routes/restaurants/restaurants.component")
);
const RecipePreview = lazy(
  () => import("./components/recipe-preview/recipe-preview.component")
);
const Auth = lazy(() => import("./routes/auth/auth.component"));
const Login = lazy(() => import("./components/login-modal/login.component"));
const SignUp = lazy(() => import("./components/signup-modal/signup.component"));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route element={<Navigation />}>
          <Route path="/" index element={<Home />} />
          <Route path="recipes/" element={<Recipes />}>
            <Route index element={<RecipePreview />} />
            <Route path=":recipeCat" element={<RecipePreview />} />
          </Route>
          <Route path="restaurants/" element={<Restaurants />} />
          <Route path="user/" element={<Auth />}>
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<SignUp />} />
          </Route>
        </Route>
      </Routes>
      <Notifier/>
    </Suspense>
  );
}

export default App;
