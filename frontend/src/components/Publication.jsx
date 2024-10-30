import Button from "./Button.jsx";
import {useState} from "react";

const Publication = ({title, url, authors, date, summary}) => {
    const [hideSummary, setHideSummary] = useState(true);
    return (
        <div className={"container relative"}>
            <div className={
                "relative z-1 max-w[62rem] mx-auto text-center" +
                " border-b border-n-6 flex mt-3"
            }>
                <div className={"block"}>
                    <div className="text-xl text-left font-hubballi mb-6">
                        {title}
                    </div>
                    <div className={"text-left"}>
                        {authors && authors.length > 0 && (
                            <div className="text-left mb-6">
                            <span className={"font-bold"}>
                                Authors:&nbsp;
                            </span>
                                <span>{authors.join(', ')}</span>
                            </div>
                        )}
                        {date && (
                            <div className="text-left mb-6">
                            <span className={"font-bold"}>
                                Date:&nbsp;
                            </span>
                                <span>{date}</span>
                            </div>
                        )}
                        <div id="summary" className={
                            "text-left mb-6 " +
                            `${hideSummary ? 'hidden' : 'block'} `
                        }>
                            <span className={"font-bold"}>
                                Summary:&nbsp;
                            </span>
                            <span>{summary}</span>
                        </div>
                    </div>
                </div>
                <div className={"mb-3 text-left mr-3"} onClick={() => {
                    setHideSummary(false)
                }}>
                    <Button spanClasses={"text-left"} className={"m-3"}
                            href={url}>
                        Read
                    </Button>
                </div>
                <div className={"mb-3 text-left mr-3"}>
                    <Button spanClasses={"text-left"} className={"m-3"} onClick={()=>{
                        hideSummary ? setHideSummary(false) : setHideSummary(true)}}>
                       Summary
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Publication;