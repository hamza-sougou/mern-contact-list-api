import axios from "axios";

const baseUrl = "http://localhost:5000";

const getAllContact = (setContact) => {
  axios.get(baseUrl).then(({ data }) => {
    console.log("data --->", data);
    setContact(data);
  });
};

const addContact = (
  nom,
  setNom,
  phone,
  setPhone,
  email,
  setEmail,
  setContact
) => {
  axios
    .post(`${baseUrl}/save`, { nom, phone, email })
    .then((data) => {
      console.log(data);
      setNom("");
      setPhone("");
      setEmail("");
      getAllContact(setContact);
    })
    .catch((err) => console.log(err));
};

const updateContact = (
  contactId,
  nom,
  setContact,
  setNom,
  phone,
  setPhone,
  email,
  setEmail,
  setIsUpdating
) => {
  axios
    .post(`${baseUrl}/update`, { _id: contactId, nom, phone, email })
    .then((data) => {
      setNom("");
      setPhone("");
      setEmail("");
      setIsUpdating(false);
      getAllContact(setContact);
    })
    .catch((err) => console.log(err));
};

const deleteContact = (_id, setContact) => {
  axios
    .post(`${baseUrl}/delete`, { _id })
    .then((data) => {
      console.log(data);
      getAllContact(setContact);
    })
    .catch((err) => console.log(err));
};

export { getAllContact, addContact, updateContact, deleteContact };
