// import { Client } from "https://deno.land/x/postgres/mod.ts";

// async function main() {
//   const client = new Client({
//     user: "ixqcunnpaljqhp",
//     database: "dec5dmk2nnga17",
//     port : 5432,
//     hostname : "ec2-23-23-245-89.compute-1.amazonaws.com",
//     password : "efde92deb3e2d07459ce425210e2a74d8a7254d6790f7449a6da82be1167aa5b",
//   });
//   await client.connect();
//   const result = await client.query("SELECT * FROM banks;");
//   console.log(result.rows);
//   await client.end();
// }

// main();




// import { Client } from "https://deno.land/x/postgres/mod.ts";
// import { DATA_TYPES, Database, Model } from 'https://deno.land/x/denodb/mod.ts';



// async function main() {
//     const db = new Database('postgres', {
    
//         username: 'nxqqihptnjqsnc',
//         password : "e34f6039d2037afdae958f12f6e45d205c18e86ac59ee8c02b46777528b2a2e0",
//         database: "d42tdc5pqmbnov",
//         port : 5432,
//         host : 'ec2-23-20-129-146.compute-1.amazonaws.com'
//     });
// //   await db.connect();
// //   const result = await db.query("SELECT * FROM comments;");
// //   console.log(result.rows);
// //   await db.end();

// db.sync();
// class Comments extends Model {
//     static table = 'comments';
//     static timestamps = true;
  
//     static fields = {
//       id: {
//         primaryKey: true,
//         autoIncrement: true,
//       },
//       content: DATA_TYPES.STRING,
//     };
//   }
//   db.link([Comments]);
//   const results = await Comments.all();
//   console.log(results);
//   await db.close();


// }

// main();

import { connectPg } from 'https://deno.land/x/pgc4d/src/mod.ts'

const db = await connectPg({
    username: "ixqcunnpaljqhp",
        database: "dec5dmk2nnga17",
        port : 5432,
        hostname : "ec2-23-23-245-89.compute-1.amazonaws.com",
        password : "efde92deb3e2d07459ce425210e2a74d8a7254d6790f7449a6da82be1167aa5b",
        sslMode : "disable"
         
    })    

try {
    const result = await db.queryStreaming('SELECT banks(1,10)')
for await (const row of result.rowsIterator) {
    console.log(row)
}
} finally {
    db.close()
}