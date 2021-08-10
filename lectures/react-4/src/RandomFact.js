function RandomFact({fact}) {

    return (
        <div className="App">
            <h3 style={{ textDecoration: "Underline" }} >Here's a random fact:</h3>
            <p>
                {fact}<br/>
            </p>
        </div>
    );
}

export default RandomFact;
