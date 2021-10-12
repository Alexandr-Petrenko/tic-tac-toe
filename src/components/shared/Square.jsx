import { useSquare } from "../providers/SquareProvider";
import '../../index.css';

const Square = ({id, value}) => {
  const { turnWasDone } = useSquare();

  return (
    <button
      className="square"
      onClick={
        value ? f => f
        : () => turnWasDone(id)
      }
      type="button"
    >
      {value}
    </button>
  );
};

export default Square;
