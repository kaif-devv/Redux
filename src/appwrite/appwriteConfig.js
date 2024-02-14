import { Client,Account,Databases, ID } from 'appwrite';
const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('65a990e61232359ff4d3');
    
    export const account = new Account(client);
    export const database = new Databases(client);

export default client;