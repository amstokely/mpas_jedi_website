import Section from "./Section.jsx";
import Heading from "./Heading.jsx";
import Tutorial from "./Tutorial.jsx";
import {tutorials} from "../sections/tutorials.js";

const Tutorials = () => {
    return (
        <Section
            className={"pt-[12rem] -mt-[5.25rem]"}
            customPaddings
            id={"tutorials"}
        >
            <div className={"container relative"}>
                <div className={
                    "relative z-1 max-w[62rem] mx-auto text-center mb-[4rem]" +
                    " md:mb-20 lg:mb:[6rem]"
                }>
                    <Heading title={"Tutorials"} />
                    {tutorials.map((item)=>(
                        <a key={item.id} href={item.href}>
                        <Tutorial
                        location={item.location}
                        date={item.date}
                        url={item.url}
                        />
                        </a>
                    ))}
                </div>
            </div>
        </Section>
    )
}

export default Tutorials;