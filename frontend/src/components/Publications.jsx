import Section from "./Section.jsx";
import Heading from "./Heading.jsx";
import {publications} from "../sections/publications.js";
import Publication from "./Publication.jsx";

const Publications = () => {
    return (
        <Section
            className={"pt-[12rem] -mt-[5.25rem]"}
            customPaddings
            id={"publications"}
        >
            <div className={"container relative"}>
                <div className={
                    "relative z-1 max-w[62rem] mx-auto text-center"
                }>
                    <Heading title={"Publications"}/>
                    {publications.map((item) => (
                        <a key={item.id} href={item.href}>
                        <Publication
                            title={item.title}
                            url={item.url}
                            authors={item.authors}
                            date={item.date}
                            summary={item.summary}
                        />
                            </a>
                    ))}

                </div>
            </div>
        </Section>
    )
}

export default Publications;