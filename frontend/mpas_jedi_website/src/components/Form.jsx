function Form({ input, setInput, getTestResults }) {
    return (
        <form onSubmit={getTestResults}>
            <input
                type="text"
                value={input}
                placeholder="Enter test results date"
                onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit">Submit</button>
        </form>
    );
}

export default Form;
