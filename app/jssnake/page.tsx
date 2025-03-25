'use client'

import { useDispatch, useSelector } from "react-redux";
import "./page.scss";
import Table from "./components/Table";
import { snakeActions } from "@/lib/store/snake.slice";

export default function JSSnake() {

  const snakeArray: Array<string> = useSelector((state: any) => state.snake.snakeArray);
  const table: Array<any> = useSelector((state: any) => state.snake.table);

  const dispatch = useDispatch();
  
  function newGame() {
    const newTable = new Array(400).fill('neonGreen');
    newTable.splice(0, 1, 'reverseRed');
    newTable.splice(1, 1, 'reverseRed');
    newTable.splice(2, 1, 'reverseOrange');
    dispatch(snakeActions.changeTable(newTable));
  }
  
  return (
    <>
    <title>JavaScript Snake</title>
    <main id="jssnake">
      <h1>JavaScript Snake</h1>
      {table.length == 0 &&
        <button className="neonGreen text2 center" type="button" onClick={newGame}>Új játék</button>
      }
      {table.length > 0 &&
        <Table></Table>
      }
    </main>
    </>
  );
}