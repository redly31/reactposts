import { BrowserRouter, Route, Routes } from "react-router-dom";
import PostsPage from "./pages/PostsPage";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";
import Navigation from "./components/Navigation";

export default function App() {
  const session = false;
  return (
    <BrowserRouter>
      <Navigation/>
      <main>
        {session ? (
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
  );
}
