import PropTypes from "prop-types"

const Button = ({ color, text }) => {
  const doAThing = () => {
    console.log("thing")
  }
  return (
    <button
      onClick={doAThing}
      style={{ backgroundColor: color }}
      className="btn"
    >
      {text}
    </button>
  )
}

Button.defaultProps = {
  color: "steelblue",
}

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
}

export default Button
