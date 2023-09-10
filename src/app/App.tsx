import { Route, Routes, Link } from "react-router-dom";
import { Suspense } from "react";
import "./styles/index.scss"
import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import { useTheme } from "app/providers/ThemeProviders/lib/useTheme";
import { classNames } from "shared/lib/classNames/classNames";

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
          <Route path={"/about"} element={<AboutPage />} />
          <Route path={"/"} element={<MainPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
