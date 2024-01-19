import { Client,Account } from 'appwrite';
const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('65a990e61232359ff4d3');
    
    export const account = new Account(client);
export default client;