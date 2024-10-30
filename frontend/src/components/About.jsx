import Section from "./Section.jsx";
import Heading from "./Heading.jsx";
import {about} from "../sections/about.js";

const About = () => {
    return (
        <Section
            className={"pt-[12rem] -mt-[5.25rem]"}
            customPaddings
            id={"about"}
        >
            <div className={"container relative"}>
                <div className={
                    "relative z-1 max-w[62rem] mx-auto text-center mb-[4rem]" +
                    " md:mb-20 lg:mb:[6rem]"
                }>
                    <div className={"text-left"}>
                        <Heading title={"About"}/>
                        {about.body}
                    </div>
                </div>
            </div>
        </Section>
    )
}

export default About;