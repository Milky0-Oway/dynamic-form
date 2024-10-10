let contacts = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phone: "555-1234",
    contactType: "Personal",
    status: "Active",
    communicationMethod: "Email",
    importance: "Primary",
    note: "Key business contact",
    addresses: [{ addressName: "Home", country: "USA", city: "New York" }],
  },
  {
    id: 2,
    firstName: "Jane",
    lastName: "Smith",
    email: "jane.smith@example.com",
    phone: "555-5678",
    contactType: "Work",
    status: "Inactive",
    communicationMethod: "Phone",
    phoneType: "Mobile",
    phoneComment: "Only available after 6pm",
    addresses: [
      { addressName: "Work", country: "USA", city: "San Francisco" },
      { addressName: "Home", country: "USA", city: "Los Angeles" },
    ],
  },
];

const getAllContacts = () => contacts;

const getContactById = (id) => contacts.find((c) => c.id === id);

const createContact = (contact) => {
  contact.id = contacts.length + 1;
  contacts.push(contact);
  return contact;
};

const updateContact = (id, updatedContact) => {
  const index = contacts.findIndex((c) => c.id === id);
  if (index === -1) return null;
  contacts[index] = { ...contacts[index], ...updatedContact };
  return contacts[index];
};

module.exports = {
  getAllContacts,
  getContactById,
  createContact,
  updateContact,
};
