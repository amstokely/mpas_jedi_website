import SyntaxHighlighter from 'react-syntax-highlighter';
import {stackoverflowLight} from 'react-syntax-highlighter/dist/esm/styles/hljs';
import '../style/Markdown.css'
import {Card} from "@mui/material";


export default function CodeBlock({node, inline, className, value, ...props}) {
    var language = "";
    try {
        language = className.replace("language-", "");
    } catch {
        language = "";
    }

    return (
        <div className='highlightRoot'>
            {inline ?
                (
                    <span>
                        <text>&nbsp;</text>
                    <Card className='inlineCode' variant='elevation' sx={{
                        fontFamily: 'monospace',
                        borderRadius: '3px',
                        padding: '0.0em 0.0em',
                        frontSize: '0.85em',
                        backgroundColor: 'lightgrey',
                        boxShadow: '1px 1px 1px 0px rgba(0,0,0,0.75)'
                    }}>
                        <code className={'inlineCode'}>{value}</code>
                    </Card>
                        <text>&nbsp;</text>
                    </span>
                )
                : (
                    <div>
                        <SyntaxHighlighter
                            language={language}
                            style={stackoverflowLight}
                            showLineNumbers={!inline}
                            startingLineNumber={1}
                            children={value}
                        />
                        <p>{language}</p>
                    </div>
                )
            }
        </div>

    );
}