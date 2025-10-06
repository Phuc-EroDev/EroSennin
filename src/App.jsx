import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from "~/Routes";
import DefaultLayout from "~/Components/Layout/DefaultLayout";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          {routes.map((route) => {
            const Page = route.page;
            return (
              <Route
                key={route.path}
                path={route.path}
                element={
                  <DefaultLayout
                    isShowNavbar={route.isShowNavbar}
                    isShowPoster={route.isShowPoster}
                  >
                    <Page />
                  </DefaultLayout>
                }
              />
            );
          })}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
