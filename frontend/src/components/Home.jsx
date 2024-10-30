import { satellite} from "../assets";
import Button from "./Button";
import Section from "./Section";
import Heading from "./Heading.jsx";

const Home = () => {

    return (
        <Section
            className="pt-[12rem] -mt-[5.25rem]"
            id="hero"
        >
            <div className="container relative mt-20">
                <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
                    <Heading title={"MPAS-JEDI"}/>
                    <div className={"font-sans font-semibold text-xl text-left flex"}>
                        A community&nbsp;
                        data assimilation&nbsp;
                        system for the&nbsp;
                        Model for Prediction Across Scales - Atmospheres&nbsp;
                        based upon the &nbsp;
                        Joint Effort for Data assimilation Integration.
                        <div className={"mb-3 text-left mr-3"}>
                            <Button spanClasses={"text-left"}
                                    href={"https://jointcenterforsatellitedataassimilation-jedi-docs.readthedocs-hosted.com/en/latest/inside/jedi-components/mpas-jedi/index.html"}>
                               Learn More
                            </Button>
                        </div>
                    </div>
                    <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
                        <div
                            className="absolute -top-dd[54%] left-1/2 w-[234%] -translate-x-1/2 -translate-y-40 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
                            <img
                                src={satellite}
                                className="w-full opacity-10 blur-sm shadow-inner"
                                width={1440}
                                height={1800}
                                alt="hero"
                            />
                        </div>

                    </div>
                </div>

            </div>
        </Section>
    );
};

export default Home;