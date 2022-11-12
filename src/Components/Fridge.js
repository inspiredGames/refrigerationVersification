import SelectedWords from './SelectedWords';

const Fridge = ({ userSelection }) => {
    // map over the userSelection array and return a list of words
    const userSelectionArr = userSelection.map((wordObject) => {
        return wordObject.word;
    });


  return (
    <div className='fridge'>
        <h2 >this is the fridge!</h2>
        <ul>
          {
            userSelectionArr.map((item) => {
                return(
                  <SelectedWords key={item} item={item}/>
                )
            })
          }
        </ul>
    </div>
  );
};

export default Fridge;