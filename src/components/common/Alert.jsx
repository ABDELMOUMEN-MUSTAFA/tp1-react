const Alert = ({ message, color }) => {
  return <div className={`alert alert-${color}`}>{message}.</div>;
};

export default Alert;
