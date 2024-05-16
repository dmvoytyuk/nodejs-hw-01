import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
	const buffer = await fs.readFile(PATH_DB, 'utf8');
	const contacts = JSON.parse(buffer);
	contacts.push(createFakeContact());
	const stringContacts = JSON.stringify(contacts);
	await fs.writeFile(PATH_DB, stringContacts);
};

await addOneContact();
