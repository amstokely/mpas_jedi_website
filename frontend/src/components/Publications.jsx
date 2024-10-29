import Section from "./Section.jsx";
import Button from "./Button.jsx";

const Publications = () => {
    return (
        <Section
            className={"pt-[12rem] -mt-[5.25rem]"}
            customPaddings
            id={"publications"}
        >
            <Section>
                <div className={"container relative"}>
                    <div className={
                        "relative z-1 max-w[62rem] mx-auto text-center"
                    }>
                        <h1 className={"h2 mb-6 font-code"}>
                            Publications
                        </h1>
                        <Section>
                            <div className={"container relative"}>
                                <div className={
                                    "relative z-1 max-w[62rem] mx-auto text-center" +
                                    " border-b border-n-6"
                                }>
                                    <p className="text-s text-left font-code mb-15">
                                        Data assimilation for the Model for Prediction Across Scales – Atmosphere with
                                        the Joint
                                        Effort for Data assimilation Integration (JEDI-MPAS 1.0.0): EnVar implementation
                                        and
                                        evaluation
                                    </p>
                                    <div className={"mb-3 text-left"}>
                                    <Button spanClasses={"text-left"} className={"mb-3"}
                                            href={"https://gmd.copernicus.org/articles/15/7859/2022/"}>
                                        Read
                                    </Button>
                                    </div>
                                </div>
                            </div>
                        </Section>
                        <Section>
                            <div className={"container relative"}>
                                <div className={
                                    "relative z-1 max-w[62rem] mx-auto text-center border-b border-n-6"
                                }>
                                    <p className="text-s text-left font-code mb-15">
                                        Data assimilation for the Model for Prediction Across Scales – Atmosphere
                                        with
                                        the Joint
                                        Effort for Data assimilation Integration (JEDI-MPAS 2.0.0-beta): ensemble of
                                        3D
                                        ensemble-variational (En-3DEnVar) assimilations
                                    </p>
                                    <div className={"mb-3 text-left"}>
                                    <Button spanClasses={"text-left"}
                                            href={"https://gmd.copernicus.org/articles/16/7123/2023/"}>
                                        Read
                                    </Button>
                                    </div>
                                </div>
                            </div>
                        </Section>
                        <Section className={"inline-block relative"}>
                            <div className={"container relative"}>
                                <div className={
                                    "relative z-1 max-w[62rem] mx-auto text-center border-b border-n-6"
                                }>
                                    <p className="text-s text-left font-code mb-15">
                                        Three-dimensional variational assimilation with a multivariate background
                                        error
                                        covariance
                                        for the Model for Prediction Across Scales – Atmosphere with the Joint
                                        Effort
                                        for Data
                                        assimilation Integration (JEDI-MPAS 2.0.0-beta)
                                    </p>
                                    <div className={"mb-3 text-left"}>
                                    <Button spanClasses={"text-left"}
                                            href={"https://gmd.copernicus.org/articles/17/3879/2024/"}>
                                        Read
                                    </Button>
                                    </div>
                                </div>
                            </div>
                        </Section>
                    </div>
                </div>
            </Section>
        </Section>
    )
}

export default Publications;