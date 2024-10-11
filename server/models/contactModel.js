let CONTACTS = [
    {
        id: 1,
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com',
        phone: '555-1234',
        contactType: 'Personal',
        status: 'Active',
        communicationMethod: 'Email',
        importance: 'Primary',
        note: 'Key business contact',
        addresses: [{ addressName: 'Home', country: 'USA' }],
    },
    {
        id: 2,
        firstName: 'Jane',
        lastName: 'Smith',
        email: 'jane.smith@example.com',
        phone: '555-5678',
        contactType: 'Work',
        status: 'Inactive',
        communicationMethod: 'Phone',
        phoneType: 'Mobile',
        phoneComment: 'Only available after 6pm',
        addresses: [
            { addressName: 'Work', country: 'USA' },
            { addressName: 'Home', country: 'USA' },
        ],
    },
];

const getAllContacts = () => CONTACTS;

const getContactById = (id) => CONTACTS.find((c) => c.id === id);

const createContact = (contact) => {
    contact.id = CONTACTS.length ? CONTACTS[CONTACTS.length - 1] + 1 : 1;
    CONTACTS.push(contact);
    return contact;
};

const updateContact = (id, updatedContact) => {
    const index = CONTACTS.findIndex((c) => c.id === id);
    if (index === -1) return null;
    CONTACTS[index] = { ...CONTACTS[index], ...updatedContact };
    return CONTACTS[index];
};

module.exports = {
    getAllContacts,
    getContactById,
    createContact,
    updateContact,
};
