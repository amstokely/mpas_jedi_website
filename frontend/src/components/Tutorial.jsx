import Button from "./Button.jsx";

const Tutorial = ({
                      location, date, url
                  }) => {
    return (
        <Button spanClasses={"text-left"} className={"m-3"}
                href={url}>
            {location} {date}
        </Button>
    )
}

export default Tutorial;