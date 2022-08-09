import { BrowserRouter, Routes, Route } from "react-router-dom";

import { firebaseApp } from "./config/firebase";
import { FirebaseProvider } from "./context/FirebaseProvider";
import { LanguageProvider } from "./context/LanguageProvider";

import MainLayout from "./layouts/MainLayout";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Projects from "./pages/projects/Projects";
import Contact from "./pages/contact/Contact";

const App = () => {
  return (
    <FirebaseProvider>
      <LanguageProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="projects" element={<Projects />} />
              <Route path="contact" element={<Contact />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </LanguageProvider>
    </FirebaseProvider>
  );
};

export default App;
