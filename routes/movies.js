import {Router} from 'express';
import db from '../db/conn.js';
import { ObjectId } from 'mongodb';

const router = new Router();

router.get('/', async (req,res) =>{
//* should try to wrap this into a try/catch
  try { 
    const collection = await db.collection('movies');

    const movies = await collection.find().toArray();
    const topTen = movies.slice(0,10);
    // console.log(topTen.length); //* used to check how many items appear in your slice


    res.status(200).json(topTen);

  } catch (error){
    console.log(error);
  }
});


//* Get route for /:id

router.get('/:id', async (req,res) => {
  try {
    const collection = await db.collection('movies');

    const query = new ObjectId(req.params.id)

    const movie = await collection.findOne({_id: query});

    res.status(200).json(movie);
    
  } catch (error) {
    console.log(error);
    
  }
});
export default router;