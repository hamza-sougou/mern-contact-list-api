const { Router } = require("express");
const {
  getContact,
  saveContact,
  updateContact,
  deleteContact,
} = require("../controllers/ContactController");

const router = Router();

router.get("/", getContact);
router.post("/save", saveContact);
router.post("/update", updateContact);
router.post("/delete", deleteContact);

module.exports = router;
