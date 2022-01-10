import { ThemeProvider } from "styled-components";
import GlobalStyle from "./globalStyles";
import { lightTheme } from "./components/Themes";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

//Components
import { Main, WorkPage, MySkillsPage, AboutPage } from "./components";

function App() {
  const location = useLocation();

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={lightTheme}>
        <AnimatePresence exitBeforeEnter>
          <Routes location={location} key={location.pathname}>
            <Route exact path="/" element={<Main />} />
            <Route exact path="/about" element={<AboutPage />} />
            <Route exact path="/work" element={<WorkPage />} />
            <Route exact path="/skills" element={<MySkillsPage />} />
            {/* <Route exact path='/resources' element={<ResourcesPage/>}/> */}
          </Routes>
        </AnimatePresence>
      </ThemeProvider>
    </>
  );
}

export default App;
