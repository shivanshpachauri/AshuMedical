import TableRow from "./TableRow";
import PropTypes from "prop-types";
const TableRows = ({ index, style, data }) => {
  const item = data[index];

  return <TableRow key={item[1].id} item={item} style={style} />;
};
TableRows.propTypes = {
  index: PropTypes.number.isRequired,
  style: PropTypes.object.isRequired,
  data: PropTypes.array.isRequired,
};
export default TableRows;
