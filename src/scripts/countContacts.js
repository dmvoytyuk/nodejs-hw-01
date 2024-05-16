import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const countContacts = async () => {
	const buffer = await fs.readFile(PATH_DB, 'utf8');
	const contacts = JSON.parse(buffer);
	return contacts.length;
};

console.log(await countContacts());
