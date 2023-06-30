const {useState} = React; // use state hook

// to change the label of the button on clicking it

let ButtonChange = () =>{

    let [val, setVal] = useState(27);

    let incrementButton = () => {
        val++;
        setVal(val);
        console.log(val);
    }
    let resetButton = () => {
        val=27;
        setVal(val);
        console.log(val);
    }

    return (
        <div>
            <h1>Exercise 18</h1>
            <br></br>
            <button onClick={incrementButton}> {val} </button> &lt;- click to increment counter
            <br></br>
            <br></br>
            <button class="btn bg-primary text-white"onClick={resetButton}> click to reset</button> 
            <br></br>
            <br></br>
        </div>
    );
}

let root = ReactDOM.createRoot(document.getElementById('myreactdiv'));
root.render(<ButtonChange/>);


