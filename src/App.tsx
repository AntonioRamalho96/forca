import React, { useState } from 'react'
import "./style.css"
import TextInput from './TextInput';

import Lifes from './Lifes';

function getInitial(answer : string)
{
    let letters = ""
    for(let i = 0; i < answer.length; i++)
    {
        letters = letters + " _";
    }
    return letters;
}

function SetLettersWGuess(guess : string, answer : string, letters : string)
{
    let result = "";
    for(let i = 0; i < answer.length ; i++)
    {
        if(answer[i] == guess)
        {
            result += (" " + guess);
        }else
        {
            result += (" " + letters[2 * i + 1]);
        }
    }

    return result;
}





function App() {
  let [answer, SetAnswer] = useState("BOLACHA")
  let [letters, SetLetters] = useState(getInitial(answer))
  let [all_guesses, Setall_guesses] = useState("Tried: ")
  const lifesRef : React.RefObject<Lifes> = React.createRef();

  

  let setAnswerAction = (answer : string) => {
    SetAnswer(answer.toUpperCase());
    SetLetters(getInitial(answer));
    Setall_guesses("Tried: ");
    lifesRef.current?.reset();
  }

  let makeGuess = (guess : string) => {
    const guessed_letter = guess[0].toUpperCase();
    const new_letters = SetLettersWGuess(guessed_letter, answer, letters);
    if(new_letters === letters)
    {
      lifesRef.current?.loose()
    }

    SetLetters(new_letters);
    Setall_guesses(all_guesses + " " + guessed_letter);
  }


  return (
    <>
      <div className='wordBox'>
        {letters}
      </div>

        <TextInput label='Enter guess' callback={makeGuess}/>
        <Lifes ref={lifesRef}/>
        <h2 className='lifes'>{all_guesses}</h2>
        <TextInput label='New answer' callback={setAnswerAction}/>
 
    </>
  )
}

export default App
