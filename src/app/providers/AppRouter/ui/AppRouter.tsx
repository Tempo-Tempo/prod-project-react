import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import { RouteConfig } from 'shared/routerConfig/routerConfig';

const AppRouter = () => {
    console.log(Object.values(RouteConfig).filter(Boolean));
    return (
        <Suspense fallback={<h1>Loading...</h1>}>
            <div className="page_wrapper">
                <Routes>
                    {Object.values(RouteConfig).map(({ element, path }) => (
                        <Route key={path} path={path} element={element} />
                    ))}
                </Routes>
            </div>
        </Suspense>
    );
};

export default AppRouter;
