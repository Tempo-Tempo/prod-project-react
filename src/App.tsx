import { Route, Routes, Link } from "react-router-dom";
import { Suspense, useContext} from "react";
import "./styles/index.scss"
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import { MainPageAsync } from "./pages/MainPage/MainPage.async";
import { useTheme } from "./styles/theme/useTheme";
import { classNames } from "./helpers/classNames/classNames";

export enum Theme {
    WHITE = 'white',
    DARK = 'dark'
}

const App = () => {
  const {theme, toggleTheme} = useTheme();
  
  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>toggle</button>
      <Link to={"/about"}> About page </Link>
      <Link to={"/"}> MainPage </Link>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          <Route path={"/about"} element={<AboutPageAsync />} />
          <Route path={"/"} element={<MainPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
