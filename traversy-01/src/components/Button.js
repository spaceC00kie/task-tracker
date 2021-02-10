import PropTypes from "prop-types"

const Button = ({ color, text, fish }) => {
  return (
    <button onClick={fish} style={{ backgroundColor: color }} className="btn">
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
  fish: PropTypes.func,
}

export default Button
