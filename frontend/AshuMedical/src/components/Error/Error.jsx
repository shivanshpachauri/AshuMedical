import PropTypes from "prop-types";
export default function Error({ title }) {
  return (
    <div className="alert alert-danger" role="alert">
      <strong>{title}</strong>
    </div>
  );
}
Error.propTypes = {
  title: PropTypes.string.isRequired,
};
