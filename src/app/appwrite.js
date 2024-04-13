import { Client, Account } from 'appwrite';

export const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('661ac1f6e6cc22ee81bc'); // Replace with your project ID

export const account = new Account(client);
export { ID } from 'appwrite';