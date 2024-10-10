const contactModel = require('../models/contactModel');

const getAllContacts = (req, res) => {
    const contacts = contactModel.getAllContacts();
    res.status(200).json(contacts);
};

const getContactById = (req, res) => {
    const id = parseInt(req.params.id);
    const contact = contactModel.getContactById(id);
    if (!contact) {
        return res.status(404).json({ message: 'Contact not found' });
    }
    res.status(200).json(contact);
};

const createContact = (req, res) => {
    const contactData = req.body;
    const newContact = contactModel.createContact(contactData);
    res.status(201).json(newContact);
};

const updateContact = (req, res) => {
    const id = parseInt(req.params.id);
    const contactData = req.body;
    const updatedContact = contactModel.updateContact(id, contactData);
    if (!updatedContact) {
        return res.status(404).json({ message: 'Contact not found' });
    }
    res.status(200).json(updatedContact);
};

module.exports = {
    getAllContacts,
    getContactById,
    createContact,
    updateContact,
};
