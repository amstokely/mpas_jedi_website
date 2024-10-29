import {curve, heroBackground, robot, satellite} from "../assets";
import Button from "./Button";
import Section from "./Section";

const Hero = () => {

    return (
        <Section
            className="pt-[12rem] -mt-[5.25rem]"
            id="hero"
        >
            <div className="container relative mt-20">
                <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
                    <div className={"font-hubballi text-[5.25rem] mb-7 text-center"}>
                        MPAS-JEDI
                    </div>
                    <div className={"font-sans text-xl text-left"}>
                        <span className={"font-thin"}>
                        A community&nbsp;
                            </span>
                        <span className={"font-bold"}>
                        data assimilation&nbsp;
                            </span>
                        <span className={"font-thin"}>
                        system for the&nbsp;
                            </span>
                        <span className={"font-bold"}>
                        Model for Prediction Across Scales - Atmospheres&nbsp;
                            </span>
                        <span className={"font-thin"}>
                        based upon the &nbsp;
                            </span>
                        <span className={"font-bold"}>
                        Joint Effort for Data assimilation Integration.
                            </span>
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

export default Hero;