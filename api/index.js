const express = require('express');
const routerAPI = require('./routes')
const app = express();
const cors = require('cors')
const{logErrors,errorHandler, boomErrorHandler}= require('./middlewares/error.handler.js');
const port = process.env.PORT || 3003;

app.use(express.json());
app.use(cors());

app.get('/api', (req, res) => {
  res.send('this is a server express');
});

routerAPI(app)

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

// app.get('/categories/:categoryId/products/:productId', (req, res) => {
//   const { categoryId, productId } = req.params;
//   res.json({
//     categoryId,
//     productId,
//   });
// });

// app.get('/categories/:categoryId', (req, res) => {
//   const { categoryId } = req.params;
//   res.json({
//     categoryId,
//     category: 'VideoGames'
//   });
// });

// app.get('/categories', (req, res) => {
//   const { categoryId } = req.params;
//   res.json([
//     {
//       categoryId,
//       category: 'VideoGames',
//       products: [],
//     },
//     {
//       categoryId,
//       category: 'Clothes',
//       products: [],
//     }
//   ]);
// });

// app.get('/users', (req, res)=>{
//   const {limit, offset} = req.query;
//   if(limit && offset){
//     res.json({
//       limit,
//       offset
//     })
//   }else{
//     res.send('No hay parametros')
//   }
// })

app.listen(port, () => {
  console.log(`Este es el port ${port}`);
});
