import { Link } from "react-router-dom";
import { FaUserAlt, FaRegTrashAlt } from "react-icons/fa";

const ContactsCard = ({ contacts, handleDelete }) => {
  return contacts.length === 0 ? (
    <h3>There are no contacts to display, click to add</h3>
  ) : (
    contacts.map((contact) => {
      const { id, name, email } = contact;

      return (
        <div className="item" key={id}>
          <div className="item-content">
            <div className="item-avatar">
              <FaUserAlt />
            </div>
            <div className="item-details">
              <Link to={{ pathname: `/contact/${id}`, state: { contact } }}>
                <p>{name}</p>
                <p>{email}</p>
              </Link>
            </div>
          </div>

          <div className="trash" onClick={() => handleDelete(id)}>
            <FaRegTrashAlt />
          </div>
        </div>
      );
    })
  );
};

export default ContactsCard;
