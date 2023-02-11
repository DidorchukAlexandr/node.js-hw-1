const fs = require("fs/promises");
const path = require("path");
const { randomUUID } = require("crypto");

const contactsPath = path.join(__dirname, "./db/contacts.json");

async function listContacts() {
  const data = JSON.parse(await fs.readFile(contactsPath));
  return data;
}

async function getContactById(contactId) {
  const data = await listContacts();
  const contact = data.find((item) => item.id === contactId.toString());
  if (!contact) {
    return null;
  }
  return contact;
}

async function removeContact(contactId) {
  const data = await listContacts();
  const idx = data.findIndex((item) => item.id === contactId);
  if (idx === -1) {
    return null;
  }
  const [removeContact] = data.splice(idx, 1);
  await fs.writeFile(contactsPath, JSON.stringify(data));
  return removeContact;
}

async function addContact(name, email, phone) {
  const data = await listContacts();
  const newContact = { id: randomUUID(), name, email, phone };
  data.push(newContact);
  await fs.writeFile(contactsPath, JSON.stringify(data));
  return newContact;
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
