import SelectedWords from './SelectedWords';


const Fridge = ({ userSelection, handleRemoveWord }) => {
    // map over the userSelection array and return a list of words
    const userSelectionArr = userSelection.map((wordObject) => {
        return wordObject.word;
    });

  return (
    <div className='fridge'>
        <h2 >this is the fridge!</h2>
        <ul className='words'>
          {
            userSelectionArr.map((item) => {
                return(
                  <SelectedWords key={item} item={item} handleRemoveWord={handleRemoveWord}/>
                )
            })
          }
        </ul>
    </div>
  );
};

export default Fridge;