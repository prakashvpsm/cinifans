const express = require('express');
const router = express.Router();
const app = require('../next/getNextApp');

module.exports = router;

router.get('/', (req, res) => {
  const actualPage = '/movies';
  const queryParams = {};
  app.render(req, res, actualPage, queryParams);
});

router.get('/:id', (req, res) => {
  const actualPage = '/movies';
  const queryParams = { id: req.params.id };
  app.render(req, res, actualPage, queryParams);
});
