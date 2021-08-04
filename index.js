const {MongoClient} = require('mongodb');


async function main() {
    const uri = "mongodb://localhost:27017?retryWrites=true&w=majority";

    const client = new MongoClient(uri);

    await client.connect();

    await listDatabases(client);

    await client.close();
}

async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();
 
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};

main();