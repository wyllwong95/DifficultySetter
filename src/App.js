import { useState } from "react"
import { DisplayDifficulty } from "./DisplayDifficulty/DisplayDifficulty"
import { SelectDifficultyButton } from "./DisplayDifficulty/SelectDifficultyButton"
import s from "./style.module.css";
import "./global.css"
import { DIFFICULTIES } from "./DisplayDifficulty/constant";

export function App() {

     const [difficulty, setDifficulty] = useState("")

     const onClickSelectDifficulty = (difficulty) => {
          setDifficulty(difficulty)
     };
     const buttonList = []
     DIFFICULTIES.map((tier) => {
          return buttonList.push(<SelectDifficultyButton onItemClick={onClickSelectDifficulty} difficulty = {tier}></SelectDifficultyButton>)
     })
     
     
     return <>
          <h1>React Difficulty Picker</h1>
          <div className={s.Wrapper}>
               <div className={s.SelectDifficultyWrapper}>
                    <>{buttonList}</>
               </div>
               <DisplayDifficulty difficulty={difficulty}></DisplayDifficulty>
          </div>
     </>
}


