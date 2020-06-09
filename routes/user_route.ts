import { Router } from 'https://deno.land/x/oak/mod.ts'
import { getPosts } from '../controller/user_controller.ts'

const router = new Router()

router.get('/api/posts', getPosts)
    
export default router