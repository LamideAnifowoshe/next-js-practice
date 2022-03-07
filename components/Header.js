import headerStyles from "../styles/Header.module.css";

const Header = () => {
  return (
    <div>
      <h1>
        <span>WebDev</span> News
      </h1>
      <style jsx>
        {`
          .title {
            color: red;
          }
        `}
      </style>
    </div>
  );
};

export default Header;
