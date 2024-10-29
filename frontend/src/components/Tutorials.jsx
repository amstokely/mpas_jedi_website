import Section from "./Section.jsx";
import Button from "./Button.jsx";

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
                    <h1 className={"h2 mb-6 font-code"}>
                        Tutorials
                    </h1>
                    <Button spanClasses={"text-left"} className={"mb-3"}
                            href={"https://www2.mmm.ucar.edu/projects/mpas-jedi/tutorial/202309NCAR/"}>
                        NCAR September 2023
                    </Button>
                    <Button spanClasses={"text-left"} className={"mb-3"}
                            href={"https://www2.mmm.ucar.edu/projects/mpas-jedi/tutorial/202310NCU/"}>
                        NCU October 2023
                    </Button>
                    <Button spanClasses={"text-left"} className={"mb-3"}
                            href={"https://www2.mmm.ucar.edu/projects/mpas-jedi/tutorial/202408INPE/"}>
                        INPE August 2024
                    </Button>
                    <Button spanClasses={"text-left"} className={"mb-3"}
                            href={"https://www2.mmm.ucar.edu/projects/mpas-jedi/tutorial/202410HOWARD/"}>
                        HOWARD October 2024
                    </Button>
                </div>
            </div>
        </Section>
    )
}

export default Tutorials;