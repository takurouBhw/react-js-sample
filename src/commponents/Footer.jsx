import PropTypes from "prop-types";
import "../css/footer.css";

const Footer = ({content}) => {
  return <footer className="footer">{content}</footer>;
};

Footer.propTypes = {
  content: PropTypes.stirng,
};

export default Footer;
