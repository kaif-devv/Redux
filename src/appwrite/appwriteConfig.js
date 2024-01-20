import { Client,Account,Databases } from 'appwrite';
const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('65a990e61232359ff4d3');
    
    export const account = new Account(client);
    export const database = new Databases(client,"65ab7ea512543295b98e" );
export default client;

