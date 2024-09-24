import { useEffect, useState } from "react";
import Contact from "./components/Contact";
import {
  getAllContact,
  addContact,
  updateContact,
  deleteContact,
} from "./utils/HandleApi";

function App() {
  const [contact, setContact] = useState([]);
  const [nom, setNom] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [contactId, setContactId] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredContacts, setFilteredContacts] = useState([]);

  useEffect(() => {
    getAllContact((contacts) => {
      setContact(contacts);
      setFilteredContacts(contacts);
    });
  }, []);

  const updateMode = (_id, nom, phone, email) => {
    setIsUpdating(true);
    setNom(nom);
    setPhone(phone);
    setEmail(email);
    setContactId(_id);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    const filtered = contact.filter(
      (item) =>
        item.nom.toLowerCase().includes(query.toLowerCase()) ||
        item.phone.includes(query) ||
        item.email.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredContacts(filtered);
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Projet API - GESTION DE CONTACTS</h1>
        <div className="top">
          <input
            type="text"
            placeholder="Nom"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
          />
          <input
            type="text"
            placeholder="Téléphone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div
            className="add"
            onClick={
              isUpdating
                ? () =>
                    updateContact(
                      contactId,
                      nom,
                      setContact,
                      setNom,
                      phone,
                      setPhone,
                      email,
                      setEmail,
                      setIsUpdating
                    )
                : () =>
                    addContact(
                      nom,
                      setNom,
                      phone,
                      setPhone,
                      email,
                      setEmail,
                      setContact
                    )
            }
          >
            {isUpdating ? "Modifier" : "Ajouter"}
          </div>
        </div>
        <div className="search-bar">
          <input
            className="barre"
            type="text"
            placeholder="Rechercher par nom, téléphone, ou email"
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>
        <div className="list">
          {filteredContacts.map((item) => (
            <Contact
              key={item._id}
              nom={item.nom}
              phone={item.phone}
              email={item.email}
              updateMode={() =>
                updateMode(item._id, item.nom, item.phone, item.email)
              }
              deleteContact={() => deleteContact(item._id, setContact)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
