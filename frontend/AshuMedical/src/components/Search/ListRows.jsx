import PropTypes from "prop-types";
import CustomList from "./CustomList";
const ListRows = ({ index, style, data, handleDelete }) => {
  const item = data[index];
  return (
    <CustomList
      key={item[1].id}
      item={item}
      onDelete={() => handleDelete(item)}
      style={style}
    />
  );
};

ListRows.propTypes = {
  index: PropTypes.number.isRequired,
  style: PropTypes.object.isRequired,
  data: PropTypes.array.isRequired,
  handleDelete: PropTypes.func.isRequired,
};
export default ListRows;
