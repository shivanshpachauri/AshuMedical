import PropTypes from "prop-types";
export default function Loading({ title }) {
  return (
    <div className="d-flex h-100 w-100 justify-content-center align-items-center">
      <div
        className="spinner-border text-primary spinner-border-sm"
        role="status"
      ></div>
      <span className="d-block bg-info">{title}</span>
    </div>
  );
}
Loading.propTypes = {
  title: PropTypes.string.isRequired,
};
