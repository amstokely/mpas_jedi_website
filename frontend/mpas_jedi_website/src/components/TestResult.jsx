import '../index.css';
function TestResult({ testName, status }) {
    const resultClass = status === 'Test not found.' ? 'not-found' : status === 'Passed' ? 'passed' : 'failed';
    if (status === 'Test not found.') {
        return (
            <div>
                <p className={resultClass}>{status}</p>
            </div>
        );
    }
    return (
        <div>
            <p className={resultClass}>{testName}: {status}</p>
        </div>
    );
}

export default TestResult;
