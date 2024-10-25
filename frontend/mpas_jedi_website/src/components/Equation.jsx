import {MathJax, MathJaxContext} from "better-react-mathjax";
const Equation = ({ equation, inline=false }) => {

    const mathJaxEquation = '\\(' + equation + '\\)';
    return (
        <MathJaxContext >
              <MathJax inline={inline}>{mathJaxEquation}</MathJax>
        </MathJaxContext>
    );
}

export default Equation;