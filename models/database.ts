import { connectPg } from 'https://deno.land/x/pgc4d/src/mod.ts'

const db = await connectPg({
    username: "admin",
        database: "deva_poems",
        port : 5432,
        hostname : "localhost",
        // password : "efde92deb3e2d07459ce425210e2a74d8a7254d6790f7449a6da82be1167aa5b",
        sslMode : "disable"
         
    })    

try {
    const result = await db.queryStreaming('SELECT * from posts where id = 2')
    console.log(result)

} finally {
    db.close()
}