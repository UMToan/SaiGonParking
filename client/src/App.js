import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '../src/routes';
import { DefaultLayout } from '../../client/src/layouts';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        // khai báo Layout = defaultLayout có header vs sidebar
                        let Layout = DefaultLayout;

                        if (route.layout) {
                            // nếu route.layout true( nghĩa là tên layout đúng)
                            Layout = route.layout; // thì layout sẽ có header vs sidebar
                        } else if (route.layout === null) {
                            // nếu như route.layout không có setting layout trước thì sẽ không có header vs sidebar
                            Layout = Fragment;
                        }

                        const Page = route.component;
                        //Page nay se lap qua mang publicRoutes ben file routes/index.js
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page /> {/*Page ở đây là children của DefaultLayout */}
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
