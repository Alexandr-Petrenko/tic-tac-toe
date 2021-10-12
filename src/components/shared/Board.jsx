import BoardRow from "./BoardRow";
import '../../index.css';

const Board = () => (
  <div>
    <div className="status"/>
    <BoardRow min={0} max={2} />
    <BoardRow min={3} max={5} />
    <BoardRow min={6} max={8} />
  </div>
);

export default Board;
