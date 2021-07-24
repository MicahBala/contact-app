import { FaUserAlt } from "react-icons/fa";

const Header = () => {
  return (
    <div className="header">
      <div className="user">
        <FaUserAlt />
      </div>
      <h1>My Contacts</h1>
    </div>
  );
};

export default Header;
