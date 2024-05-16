import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
	const buffer = await fs.readFile(PATH_DB, 'utf8');
	const contacts = JSON.parse(buffer);
	for (let i = 0; i < number; i++) {
		contacts.push(createFakeContact());
	}
	const stringContacts = JSON.stringify(contacts);
	await fs.writeFile(PATH_DB, stringContacts);
};

await generateContacts(5);
