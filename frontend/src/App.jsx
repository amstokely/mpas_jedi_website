import './index.css'
import ButtonGradient from "./assets/svg/ButtonGradient.jsx";
import Button from "./components/Button.jsx";
import Header from "./components/Header.jsx";

const App = () => {
    return (
        <>
            <div className={"pt-[4.75rem lg:pt-[5.25rem] overflow-hidden"}>
                <Header />
                <Button className={"mt-10"}>Button</Button>
            </div>
            <ButtonGradient />
        </>
    )
}

export default App
