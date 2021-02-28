import { useState } from "react"
import { Link } from "react-router-dom"

const Footer = () => {
  const [clicked, setClicked] = useState(false)
  return (
    <footer>
      <p>Copyright &copy; 2021</p>
      { !clicked &&
        <Link to="/about" onClick={() => {setClicked(true)}}>
          About
        </Link>
      }
      
    </footer>
  )
}

export default Footer
