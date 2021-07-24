import ContactsCard from "./ContactsCard";
import { Link } from "react-router-dom";

const ContactsList = ({ contacts, handleDelete }) => {
  return (
    <div className="contact-list">
      <ContactsCard contacts={contacts} handleDelete={handleDelete} />
      <Link to="/add">
        <button className="btn-add">Add Contact</button>
      </Link>
    </div>
  );
};

export default ContactsList;
