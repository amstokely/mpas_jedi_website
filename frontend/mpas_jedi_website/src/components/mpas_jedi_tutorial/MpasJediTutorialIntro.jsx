import '../../style/MpasJediTutorial.css'
import {Link} from "react-router-dom";
import React from "react";

const MpasJediTutorialIntro = () => {

    const title = "Welcome to the MPAS-JEDI tutorial practice guide\n"

    const body = "This web page is intended to serve as a guide through the practice exercises of this tutorial. Exercises are split into seven main sections, each of which focuses on a particular aspect of using the MPAS-JEDI data assimilation system.\n" +
        "\n" +
        "In case you would like to refer to any of the lecture slides from previous days, you can open the Tutorial Agenda in another window. The test dataset can be downloaded from Here.\n" +
        "\n" +
        "You can proceed through the sections of this practical guide at your own pace. It is highly recommended to go through the exercises in order, since later exercises may require the output of earlier ones. Clicking the grey headers will expand each section or subsection.\n" +
        "\n"

    return (
        <div className={"MpasJediTutorial"}>
            <div className={"NavButton"}>
                <div className={"NextButton"}>
                    <Link to={'/tutorial/section0'}>
                        <button>Prerequisites and environment setup</button>
                    </Link>
                </div>
                <div className={"PreviousButton"}>
                    <Link to={'/'}>
                        <button>Home</button>
                    </Link>
                </div>
            </div>
            <div className={"content"}>
                <h1>Welcome to the MPAS-JEDI tutorial practice guide</h1>
                <p>
                    This web page is intended to serve as a guide through the practice exercises of this tutorial.
                    Exercises are split into seven main sections, each of which focuses on a particular aspect of using
                    the MPAS-JEDI data assimilation system.
                    In case you would like to refer to any of the lecture slides from previous days, you can open the
                    Tutorial Agenda in another window. The test dataset can be downloaded from Here.
                    You can proceed through the sections of this practical guide at your own pace. It is highly
                    recommended to go through the exercises in order, since later exercises may require the output of
                    earlier ones.
                </p>
            </div>
        </div>
    );
}

export default MpasJediTutorialIntro;