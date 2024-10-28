import {useLocation} from "react-router-dom";
import {navigation} from "../constants/index.js";

const Sidebar = () => {
    const location = useLocation();
    return (
        <div
            className={"fixed top-24 bottom 0 left-0 z-50 bg-n-8/90" +
                " backdrop-blue-sm border-b border-n-6" +
                ` lg:bg-n-8/90 lg:backdrop-blur-sm`
        }
        >
            <div className={"flex flex-col items-center px-1" +
                " lg:px-1 xl:px-1 max-lg:py-1"}
            >
                <nav className={"mt-10 flex-1" +
                    " bottom-0 bg-n-8 lg:flex lg:mx-auto lg:bg-transparent"}>
                    <div className={"relative z-1 flex flex-col justify-center m-auto lg:flex-col}"}
                    >
                        {navigation.map((item) => (<a key={item.id} href={item.url}
                                                      className={"block relative font-code text-2xl uppercase text-n-1 transition-colors" +
                                                          ` hover:text-color-1 ${item.onlyMobile ? "lg:hidden" : ""} px-1 py-1 md:py-8 lg:-mr-0.25
                             lg:text-xs lg:font-semibold ${item.url === location.hash ? 'z-2 lg:text-n-1' : 'lg:text-n-1/50'}
                             lg:leading-5 lg:hover:text-n-1 xl:px-1`}>
                                {item.title}
                            </a>
                        ))}
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Sidebar