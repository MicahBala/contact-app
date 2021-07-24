import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import uuid from "react-uuid";
import AddContact from "./components/Addcontact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ContactsList from "./components/ContactsList";
import ContactDetails from "./components/ContactDetails";

const App = () => {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  const handleAddContact = (contact) => {
    setContacts([...contacts, { id: uuid(), ...contact }]);
  };

  const handleDelete = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactList);
    // console.log("Deleted ", id);
  };

  // Get contacts from Local Storage and display
  useEffect(() => {
    const getContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (getContacts) setContacts(getContacts);
  }, []);

  // Save added contacts to Local Storage
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="app">
      <Router>
        <Header />
        <div className="container">
          <Switch>
            <Route
              path="/"
              render={(props) => (
                <ContactsList
                  {...props}
                  contacts={contacts}
                  handleDelete={handleDelete}
                />
              )}
              // component={() => (
              //   <ContactsList contacts={contacts} handleDelete={handleDelete} />
              // )}
              exact
            />
            <Route
              path="/add"
              render={(props) => (
                <AddContact {...props} handleAddContact={handleAddContact} />
              )}
            />

            <Route path="/contact/:id" component={ContactDetails} />
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
