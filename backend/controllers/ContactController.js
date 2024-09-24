const ContactModel = require("../models/ContactModel");

module.exports.getContact = async (req, res) => {
  const contact = await ContactModel.find();
  res.send(contact);
};

module.exports.saveContact = async (req, res) => {
  const { nom, phone, email } = req.body;

  ContactModel.create({ nom, phone, email }).then((data) => {
    console.log("Ajoute avec succes...");
    console.log(data);
    res.send(data);
  });
};

module.exports.updateContact = async (req, res) => {
  const { _id, nom, phone, email } = req.body;
  ContactModel.findByIdAndUpdate(_id, { nom, phone, email })
    .then(() => res.send("Mis a jour avec Succes..."))
    .catch((err) => console.log(err));
};

module.exports.deleteContact = async (req, res) => {
  const { _id, nom, phone, email } = req.body;
  ContactModel.findByIdAndDelete(_id)
    .then(() => res.send("Supprime avec Succes..."))
    .catch((err) => console.log(err));
};
