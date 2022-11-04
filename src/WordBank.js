
const WordBank = (props) => {

    return (
        <ul>
            {
                props.words.map((w) => {
                    return (
                        <li key={w.word}>{w.word}</li>
                    )
                })
            }
        </ul>
    )
}

export default WordBank;