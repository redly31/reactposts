import { BrowserRouter, Route, Routes } from "react-router-dom";
import PostsPage from "./pages/PostsPage";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";
import Navigation from "./components/Navigation";
import { AuthContext } from "./helpers/context";
import { useState } from "react";

export default function App() {
  const [isAuth, setIsAuth] = useState(false)
  return (
    <AuthContext.Provider value={{
      isAuth,
      setIsAuth
    }}>
      <BrowserRouter>
        <Navigation />
        <main>
          {isAuth ? (
            <Routes>
              <Route path="/" element={<PostsPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          ) : (
            <Routes>
              <Route path="/" element={<LoginPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          )}
        </main>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}
