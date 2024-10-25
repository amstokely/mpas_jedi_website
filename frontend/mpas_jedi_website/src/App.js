import { HashRouter as Router, Routes, Route } from "react-router-dom";
import MpasJediTutorial from "./components/mpas_jedi_tutorial/MpasJediTutorial";
import MpasJediTutorialIntro from "./components/mpas_jedi_tutorial/MpasJediTutorialIntro";
import MpasJediTutorialSection0 from "./components/mpas_jedi_tutorial/MpasJediTutorialSection0";
import MpasJediTutorialSection1 from "./components/mpas_jedi_tutorial/MpasJediTutorialSection1";
import MpasJediTutorialSection2 from "./components/mpas_jedi_tutorial/MpasJediTutorialSection2";
import MpasJediTutorialSection3 from "./components/mpas_jedi_tutorial/MpasJediTutorialSection3";
import MpasJediTutorialSection4 from "./components/mpas_jedi_tutorial/MpasJediTutorialSection4";
import MpasJediTutorialSection5 from "./components/mpas_jedi_tutorial/MpasJediTutorialSection5";
import MpasJediTutorialSection6 from "./components/mpas_jedi_tutorial/MpasJediTutorialSection6";
import MpasJediTutorialSection7 from "./components/mpas_jedi_tutorial/MpasJediTutorialSection7";
import MpasJediTutorialSection8 from "./components/mpas_jedi_tutorial/MpasJediTutorialSection8";
import Home from "./components/home/Home";
function App() {
    return (
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/tutorial" element={<MpasJediTutorial />} />
                    <Route path="/tutorial/introduction" element={<MpasJediTutorialIntro />} />
                    <Route path="/tutorial/section0" element={<MpasJediTutorialSection0 />} />
                    <Route path="/tutorial/section1" element={<MpasJediTutorialSection1 />} />
                    <Route path="/tutorial/section2" element={<MpasJediTutorialSection2 />} />
                    <Route path="/tutorial/section3" element={<MpasJediTutorialSection3 />} />
                    <Route path="/tutorial/section4" element={<MpasJediTutorialSection4 />} />
                    <Route path="/tutorial/section5" element={<MpasJediTutorialSection5 />} />
                    <Route path="/tutorial/section6" element={<MpasJediTutorialSection6 />} />
                    <Route path="/tutorial/section7" element={<MpasJediTutorialSection7 />} />
                    <Route path="/tutorial/section8" element={<MpasJediTutorialSection8 />} />
                </Routes>
            </Router>
    );
}

export default App;