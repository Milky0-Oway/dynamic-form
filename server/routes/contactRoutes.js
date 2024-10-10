const express = require("express");
const contactRoutes = express.Router();
const contactController = require("../controllers/contactController");

contactRoutes.get("/", contactController.getAllContacts);
contactRoutes.get("/:id", contactController.getContactById);
contactRoutes.post("/", contactController.createContact);
contactRoutes.put("/:id", contactController.updateContact);

module.exports = { contactRoutes };
