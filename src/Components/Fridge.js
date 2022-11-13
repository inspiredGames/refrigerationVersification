// import logo from "../assets/logo.jpeg";
// import fridge from "../assets/fridgeimgc.png";

const Fridge = ({ userSelection, handleRemoveWord }) => {
    console.log('Fridge component has rendered');
   
    return(
        <div className="fridge">
            {/* <img src={fridge} alt="fridge" /> */}
            {/* <img src={logo} alt="logo" /> */}
            <h2>this is the fridge!</h2>
            <ul>
                 {
                userSelection.map((wordObject) => {
                    return(
                        <li onClick={(e) => {handleRemoveWord(e.target.textContent)}} key={`${wordObject['word']}Fridge`}>{wordObject['word']}</li>
                    )
                  })
                }
            </ul>
        </div>
    )
};

export default Fridge;