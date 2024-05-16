import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const thanos = async () => {
	const buffer = await fs.readFile(PATH_DB, 'utf8');
	const contacts = JSON.parse(buffer);
	const newContacts = contacts.filter(() => Math.random() > 0.5);
	await fs.writeFile(PATH_DB, JSON.stringify(newContacts));
};

await thanos();
