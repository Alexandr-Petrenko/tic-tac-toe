import Square from './Square';
import PropTypes from 'prop-types';
import { useSquare } from '../providers/SquareProvider';
import '../../index.css';

const BoardRow = ({min, max}) => {
  const { squares } = useSquare();
  const squaresWithValidId = squares.filter(square => square.id >= min && square.id <= max);

  return (
    <div className="board-row">
      {squaresWithValidId.map(square => {
        const { value, id } = square;

        return <Square value={value} id={id} key={id} />;
      })}
    </div>
  );
};

export default BoardRow;

BoardRow.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
};
