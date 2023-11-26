import express from 'express'
var router = express.Router();

router.get("/", (_, res) => {
  res.render('index');
})

export default router;