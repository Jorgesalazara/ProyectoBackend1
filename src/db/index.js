import mongoose from 'mongoose'; 

let connection = null; 
let connectionString = 'mongodb+srv://jorgeernestosalazararrieta:Jorgesalazar2001mongo@cluster0.5ibanaw.mongodb.net/?retryWrites=true&w=majority';
export function createConnection() { 
    if (!connection) { 
        connection = mongoose.createConnection(connectionString, {
             autoIndex: true,         
        });         
        console.log('Connected to MongoDB');     
    }     
return connection; }