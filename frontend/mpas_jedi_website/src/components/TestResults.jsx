import '../index.css';
import TestResult from './TestResult';

function TestResults({ testResultsDate }) {
    return (
        <div className="TestResults">
            {Object.entries(testResultsDate).map(([key, value]) => (
                <TestResult key={key} testName={key} status={value} />
            ))}
        </div>
    );
}

export default TestResults;
