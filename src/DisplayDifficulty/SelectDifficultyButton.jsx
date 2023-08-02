import s from "./style.module.css";
export function SelectDifficultyButton(props) {

  function onClick(){
    props.onItemClick(props.difficulty);
  }
  return <div className={s.SelectDifficultyButton} onClick={onClick}>Set difficulty to {props.difficulty} </div>
}