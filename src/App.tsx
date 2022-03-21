import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import SavedUsersPage from "./pages/SavedUsersPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/saved-users" element={<SavedUsersPage />} />
      </Routes>
    </div>
  );
}

export default App;
