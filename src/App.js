import TopBar from "./components/topbar/TopBar";
import HomePage from "./pages/homepage/HomePage";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";

function App() {
  const { user } = useContext(Context);
  // console.log("current user: " + user)
  return (
    <BrowserRouter>
      <TopBar />
      <Routes>
        <Route exact path="/" element={<HomePage />}>
        </Route>

        <Route path="/posts" element={<HomePage />}>
        </Route>

        <Route path="/register" element={user ? <HomePage /> : <Register />}>
        </Route>

        <Route path="/login" element={user ? <HomePage /> : <Login />}>
        </Route>

        <Route path="/post/:id" element={<Single />}>
        </Route>

        <Route path="/contact" element={<Contact />}>
        </Route>

        <Route path="about" element={<About />}>
        </Route>

        <Route path="/write" element={user ? <Write /> : <Login />}>
        </Route>

        <Route path="/settings" element={user ? <Settings /> : <Login />}>
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;