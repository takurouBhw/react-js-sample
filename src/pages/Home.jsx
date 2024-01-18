import Header from "../commponents/Header";
import Footer from "../commponents/Footer";
import Counter from "../commponents/Counter";
import PropTypes from "prop-types";

import "../css/home.css";

const Home = ({ title, children }) => {
  const footerContent = 'フッターのコンテンツ内容';
  const headerContent = 'ヘッダーのコンテンツ内容';

  return (
    <div className="container">
      <Header content={headerContent} />
      <h1>{title}</h1>
      <div>ホーム画面のコンテンツ内容</div>
      <Counter />
      <div>{children}</div>
      <Footer content={footerContent}/>
    </div>
  );
};

Home.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Home;
