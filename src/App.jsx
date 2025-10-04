import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { routes } from '~/Routes';
import DefaultLayout from '~/Components/Layout/DefaultLayout';

function App() {

  return (
    <div>
      <Router>
        <Routes>
          {routes.map((route) => {
            const Page = route.page;
            const Layout = DefaultLayout;
            return (
              <Route
                key={route.path}
                path={route.path}
                element={
                  <Layout isShowNavbar={route.isShowNavbar} isShowPoster={route.isShowPoster}>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </Router>
    </div>
  )
}

export default App
