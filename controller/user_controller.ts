import {dbCredentials} from '../models/config.ts';
import { Client } from "https://deno.land/x/postgres/mod.ts";
import { Posts } from '../models/types.ts'

//getPosts GET api/posts
//@description     To Get all the Post values
    const getPosts = async ({ response }: { response: any }) => {
        const client = await new Client(dbCredentials);
        try {
            await client.connect()
    
            const result = await client.query("SELECT * FROM posts")
            console.log(result);
    
            const posts = new Array()
    
            result.rows.map(p => {
                let obj: any = new Object()
    
                result.rowDescription.columns.map((element, index) => {
                    obj[element.name] = p[index]
                })
    
                posts.push(obj)
            })
    
            response.body = {
                success: true,
                data: posts
            }
        } catch (err) {
            response.status = 500
            response.body = {
                success: false,
                msg: err.toString()
            }
        } finally {
            await client.end()
        }
        
        
    }
    const checkTableexists = async ({ response }: { response: any }) => {
        const client = await new Client(dbCredentials);

        try{
           
            const response =  await client.query("CREATE TABLE posts (\"id\" SERIAL PRIMARY KEY,\"name\" text NOT NULL,\"poem\" text,\"createdAt\" timestamp with time zone,description text,\"upvoteCount\" integer,\"downvoteCount\" integer,\"updatedAt\" timestamp with time zone);");
            console.log(response);
        }
        catch (err) {
            response.status = 500
            response.body = {
                success: false,
                msg: err.toString()
            }
        } finally {
            await client.end()
     } }
    
    
    //@description      Exporting all the created Routes
    export { getPosts }