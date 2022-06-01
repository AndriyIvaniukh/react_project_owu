import React, {FC} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";

import {MainLayout} from "./layouts";
import {MoviePages} from "./pages";
import {MovieDetailsPage} from "./pages/MovieDetailsPage";

const App: FC = () => {

  return (
      <Routes>
          <Route path={'/'} element={<MainLayout/>}>
              <Route index element={<Navigate to={'/movies'}/>}/>
              <Route path={'movies'} element={<MoviePages/>}>
              </Route>
              <Route path={'movies/:id'} element={<MovieDetailsPage/>}/>
          </Route>
      </Routes>
  );
};

export {App};
