import {Link} from "react-router-dom";
import "../../index.css";

import MpasJediTutorial from "../mpas_jedi_tutorial/MpasJediTutorial";

const Home = () => {
    return (
        <div>
            <h1 >MPAS-JEDI</h1>
            <Link to={'tutorial/'}>
                <button>MPAS-JEDI Tutorial</button>
            </Link>
        </div>
    );
}

export default Home;