import express from 'express'
var router = express.Router();

router.get("/", (_, res) => {
  res.render('index');
})

router.get("/test", (_, res) => {
  res.send('Test!')
})

export default router;