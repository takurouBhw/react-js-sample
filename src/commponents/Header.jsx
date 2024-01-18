import PropTypes from "prop-types";
import "../css/header.css";


const Header = ({content}) => {
  return <header className="header">{content}</header>;
};


Header.propTypes = {
  content: PropTypes.stirng,
};

export default Header;
