import '../styles/App.scss';
import {useState} from 'react';



function App() {

  const [numberOfErrors,setNumberOfErrors] = useState(0); 
  const [lastLetter,setlastLetter] = useState(''); 
  const [word,setWord] = useState('katakroker'); 
  const [userLetters,setuserLetters] = useState([]); 
  const newLetter = [];

  const renderSolutionLetters = () =>{
    const wordLetters = word.split('');
    return wordLetters.map((eachLetter, index) =>{
      return (<li className='letter' key={index}></li>);
    } )
  }

  userLetters = ['a', 'e', 'i']

  const nuevoArray = ['z', 'x', ...userLetters, 'o', 'u']
  

  const handleClickIncrementar= ()=> {
    setNumberOfErrors(numberOfErrors+1);
  }

  const handleChangeLastLetter = (event) =>{
    const inputValue = event.target.value;
    if(isValidname(inputValue)){
      setlastLetter(inputValue);

      setuserLetters ([...userLetters, inputValue]);

      // const nuevoArray = userLetters.push(inputValue);
      // setuserLetters(nuevoArray);
    
    }else{
    }

  }
  
  const isValidname = (name) =>{
    return /^[a-zA-ZÀ-ÿ\u00f1\u00d1]*$/.test(name);
  }
 

  return    ( <div className="page">
      <header>
        <h1 className="header__title">Juego del ahorcado</h1>
      </header>
      <main className="main">
        <section>
          <div className="solution">
            <h2 className="title">Solución:</h2>
            <ul className="letters">{renderSolutionLetters()}</ul>
            {/* <ul className="letters">
              <li className="letter">k</li>
              <li className="letter">a</li>
              <li className="letter"></li>
              <li className="letter">a</li>
              <li className="letter">k</li>
              <li className="letter">r</li>
              <li className="letter"></li>
              <li className="letter">k</li>
              <li className="letter">e</li>
              <li className="letter">r</li>
            </ul> */}
          </div>
          <div className="error">
            <h2 className="title">Letras falladas:</h2>
            <ul className="letters">
              <li className="letter">f</li>
              <li className="letter">q</li>
              <li className="letter">h</li>
              <li className="letter">p</li>
              <li className="letter">x</li>
            </ul>
          </div>
          <form className="form">
            <label className="title" htmlFor="last-letter">Escribe una letra:</label>
            <input
              autoComplete="off"
              className="form__input"
              maxLength="1"
              type="text"
              name="last-letter"
              id="last-letter"
              value={lastLetter}
              onChange={handleChangeLastLetter}
            />
          </form>
        </section>
        <section className={`dummy error-${numberOfErrors}`}>
          <span className="error-13 eye"></span>
          <span className="error-12 eye"></span>
          <span className="error-11 line"></span>
          <span className="error-10 line"></span>
          <span className="error-9 line"></span>
          <span className="error-8 line"></span>
          <span className="error-7 line"></span>
          <span className="error-6 head"></span>
          <span className="error-5 line"></span>
          <span className="error-4 line"></span>
          <span className="error-3 line"></span>
          <span className="error-2 line"></span>
          <span className="error-1 line"></span>
        </section>
        <button onClick={handleClickIncrementar} className="button">Incrementar</button>
      
      </main>
    </div>)
}

export default App;
