import {navigation} from "../constants/index.js";
import {useLocation} from "react-router-dom";
import {nsf, ncar} from "../assets/index.js";

const Header = () => {
    const location = useLocation();
    return (
        <div
            className={"fixed top-0 z-50 bg-n-8/90" +
                " backdrop-blue-sm border-b border-n-6" +
                " lg:bg-n-8/90 lg:backdrop-blur-sm"}>
            <div className={"flex items-center px-1" +
                " lg:px-1 xl:px-1 max-lg:py-4"}
            >
                <a className="flex xl:mr-3" href="#nsf">
                    <img src={nsf} width={80} height={40} alt="NSF"/>
                </a>
                <a className="flex xl:mr-10" href="#ncar">
                    <img src={ncar} width={80} height={40} alt="ncar"/>
                </a>
                <span
                    className={"relative inline-flex items-center justify-center h-11 text-n-1 text-4xl transition-colors hover:text-color-1"}>
                    MPAS-JEDI
                </span>
                <nav className={"hidden fixed top-[5rem] left-0 right-0" +
                    " bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent"}>
                    <div className={"relative z-2 flex flex-col items-center justify-center " +
                        " m-auto lg:flex-row"}
                    >
                        {navigation.map((item) => (<a key={item.id} href={item.url}
                                                      className={"block relative font-code text-2xl uppercase text-n-1 transition-colors" +
                                                          ` hover:text-color-1 ${item.onlyMobile ? "lg:hidden" : ""} px-6 py-6 md:py-8 lg:-mr-0.25
                                 lg:text-xs lg:font-semibold ${item.url === location.hash ? 'z-2 lg:text-n-1' : 'lg:text-n-1/50'}
                                 lg:leading-5 lg:hover:text-n-1 xl:px-12`}>
                                {item.title}
                            </a>
                        ))}
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Header