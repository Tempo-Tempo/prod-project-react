import "./styles/index.scss";
import { useTheme } from "app/providers/ThemeProviders/lib/useTheme";
import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "./providers/AppRouter";
import { Navbar } from "widget/navbar";
import { Sidebar } from "widget/sidebar";
import { Suspense } from "react";



export enum Theme {
  WHITE = "white",
  DARK = "dark",
}

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Suspense fallback="">
           <Navbar />
           
      <div className="content_page">
        <Sidebar /> 
        <AppRouter />
      </div>
      </Suspense>
    
    </div>
  );
};

export default App;
