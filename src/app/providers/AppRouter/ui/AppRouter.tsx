import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import { RouteConfig } from 'shared/routerConfig/routerConfig';
import { PageLoader } from 'widget/pageLoader/PageLoader';

const AppRouter = () => (

    <div className="page_wrapper">
        <Suspense fallback={<PageLoader />}>
            <Routes>
                {Object.values(RouteConfig).map(({ element, path }) => (
                    <Route key={path} path={path} element={element} />
                ))}
            </Routes>
        </Suspense>
    </div>
);

export default AppRouter;
