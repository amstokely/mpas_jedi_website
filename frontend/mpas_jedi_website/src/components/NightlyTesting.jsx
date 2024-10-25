import {useState} from 'react';
import Form from './Form';
import TestResults from './TestResults';
import axios from 'axios';

const NightlyTesting = () => {
    const [input, setInput] = useState('');
    const [testResultsDate, setTestResultsDate] = useState('');

    const getTestResults = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post(
                'http://localhost:5000/api/data',
                {key: input}
            );
            if (response.data === 'Test not found.') {
                response.data = {'Test not found.': 'Test not found.'};
            }
            setTestResultsDate(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h1>MPAS-JEDI</h1>
            <h2>Nightly Test Results</h2>
            <Form input={input} setInput={setInput} getTestResults={getTestResults}/>
            <TestResults testResultsDate={testResultsDate}/>

        </div>
    );
}

export default NightlyTesting;
