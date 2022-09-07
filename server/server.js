
require('dotenv').config();
const {PORT} = process.env;
const {MongoClient} = require('mongodb')

const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())


// async function main(){
//   const uri = 'mongodb+srv://jaidynamarti:Misd2020@firstcluster.bmk2im5.mongodb.net/?retryWrites=true&w=majority'
//   const client = new MongoClient(uri,{ useNewUrlParser:true, useUnifiedTopology: true})
//   try {
//     await client.connect();
//     await findOneRecipe(client, 'Pumpkin Spice Balls')
//   } catch (e){
//     console.error(e)
//   } finally {
//     await client.close()
//   }
// }
// main().catch(console.err)



///endpoints / controllers


app.get('/getAllRecipes', async (req, res) =>{

  const uri = 'mongodb+srv://jaidynamarti:Misd2020@firstcluster.bmk2im5.mongodb.net/?retryWrites=true&w=majority'
  const client = new MongoClient(uri,{ useNewUrlParser:true, useUnifiedTopology: true})
  try {
    await client.connect();
    const result = await client.db('Bone-Appetit').collection('Recipes').find();

    const recipesArr = await result.toArray()

    return res.send(recipesArr);

  } catch (e){
    console.error(e)
  } finally {
    await client.close()
  }
})

app.post('/create', async (req, res) =>{

  const uri = 'mongodb+srv://jaidynamarti:Misd2020@firstcluster.bmk2im5.mongodb.net/?retryWrites=true&w=majority'
  const client = new MongoClient(uri,{ useNewUrlParser:true, useUnifiedTopology: true})

  try {
    await client.connect();
    const result = await client.db('Bone-Appetit').collection('Recipes').insertOne(req.body);

  } catch (e){
    console.error(e)
  } finally {
    await client.close()
  }
})


// functions


// async function findOneRecipe(client, title){
//   const result = await client.db('Bone-Appetit').collection('Recipes').findOne({title: title});
  
//   if(result){
//     console.log(`This is the ${title} recipe.`);
//     console.log(result)
//   } else {
//     console.log('No recipes found with that title!');
//   }
// }


app.listen(5000, () => console.log(`Running on port 5000`))

