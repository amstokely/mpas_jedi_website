import Section from "./Section.jsx";
import Button from "./Button.jsx";

const Hero = () => {
    return (
        <Section
            className={"pt-[12rem] -mt-[5.25rem]"}
            // crosses
            // crossesOffset={"lg:translate-y-[5.85rem]"}
            customPaddings
            id={"hero"}

        >
            <div className={"container relative"}>
                <div className={
                    "relative z-1 max-w[62rem] mx-auto text-center mb-[4rem]" +
                    " md:mb-20 lg:mb:[6rem]"
                }>
                    <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8 text-3xl">
                        A community data assimilation system for the Model for Prediction Across Scales -
                        Atmosphere (MPAS-A) based upon the Joint Effort for Data assimilation Integration (JEDI)
                    </p>
                </div>
            </div>
        </Section>
    );
}

export default Hero;