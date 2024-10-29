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
                    <h1 className={"h1 mb-6 font-hubballi font-bold text-8xl"}>
                        MPAS-JEDI
                    </h1>
                    <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8 text-3xl">
                        A community data assimilation system for the Model for Prediction Across Scales -
                        Atmosphere (MPAS-A) based upon the Joint Effort for Data assimilation Integration (JEDI)
                    </p>
                    <div className={"block mt-7"}>
                        <Button white spanClasses={"text-left"} className={"mb-3"}
                                href={"https://gmd.copernicus.org/articles/15/7859/2022/"}>Data
                            assimilation for the Model for Prediction Across Scales – Atmosphere with the Joint Effort
                            for Data assimilation Integration (JEDI-MPAS 1.0.0): EnVar implementation and
                            evaluation </Button>
                        <Button className={"mb-3"} spanClasses={"text-left"} white
                                href={"https://gmd.copernicus.org/articles/16/7123/2023/"}>
                            Data assimilation for the Model for Prediction Across Scales – Atmosphere with the Joint
                            Effort for Data assimilation Integration (JEDI-MPAS 2.0.0-beta): ensemble of 3D
                            ensemble-variational (En-3DEnVar) assimilations
                        </Button>
                        <Button spanClasses={"text-left"} white
                                href={"https://gmd.copernicus.org/articles/17/3879/2024/"}>
                            Three-dimensional variational assimilation with a multivariate background error covariance
                            for the Model for Prediction Across Scales – Atmosphere with the Joint Effort for Data
                            assimilation Integration (JEDI-MPAS 2.0.0-beta)

                        </Button>
                    </div>
                </div>
            </div>
        </Section>
    );
}

export default Hero;