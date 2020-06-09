import {dbCredentials} from '../models/config.ts';
import { Client } from "https://deno.land/x/postgres/mod.ts";
import { Posts } from '../models/types.ts'


const client = await new Client(dbCredentials);


    const getPosts = async ({ response }: { response: any }) => {
        try {
            await client.connect()
    
            const result = await client.query("SELECT * FROM posts")
    
            const posts = new Array()
    
            result.rows.map(p => {
                let obj: any = new Object()
    
                result.rowDescription.columns.map((el, i) => {
                    obj[el.name] = p[i]
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
    
    export { getPosts }