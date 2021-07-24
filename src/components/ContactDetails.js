import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const ContactDetails = (contact) => {
  // console.log(contact);
  const { name, email } = contact.location.state.contact;
  return (
    <>
      <div className="contact-details">
        <div className="image">
          <FaUserAlt className="avatar" />
        </div>
        <div className="content">
          <h1>{name}</h1>
          <p>{email}</p>
        </div>
      </div>
      <Link to="/">
        <button className="btn-add">Back to Contacts</button>
      </Link>
    </>
  );
};

export default ContactDetails;
