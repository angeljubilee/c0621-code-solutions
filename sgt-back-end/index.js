const pg = require('pg');
const express = require('express');

const app = express();

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssql: {
    rejectUnauthorized: false
  }
});

app.use(express.json());

app.use('/api/grades/:gradeId', (req, res, next) => {
  const gradeId = parseInt(req.params.gradeId, 10);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({
      error: '"gradeId" must be a positive integer'
    });
    return;
  }
  next();
});

app.get('/api/grades', (req, res) => {
  const sql = `
    select "gradeId",
           "name",
           "course",
           "score",
           "createdAt"
    from "grades"
  `;

  db.query(sql)
    .then(result => {
      res.json(result.rows);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.post('/api/grades', (req, res) => {
  if (!req.body.name || !req.body.course || !req.body.score) {
    res.status(400).json({
      error: 'Invalid grade'
    });
    return;
  }
  const { name, course, score } = req.body;
  const scoreNum = parseInt(score, 10);
  if (!Number.isInteger(scoreNum) || scoreNum <= 0 || scoreNum > 100) {
    res.status(400).json({
      error: 'Invalid score'
    });
    return;
  }
  const sql = `
    insert into "grades" (
      "name",
      "course",
      "score"
    )
    VALUES ($1, $2, $3)
    returning *
  `;
  const params = [name, course, score];
  db.query(sql, params)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({
          error: 'An unexpected error occurred.'
        });
      } else {
        res.status(201).json(grade);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.put('/api/grades/:gradeId', (req, res, next) => {
  if (!req.body.name || !req.body.course || !req.body.score) {
    res.status(400).json({
      error: 'Invalid grade'
    });
    return;
  }
  const { name, course, score } = req.body;
  const scoreNum = parseInt(score, 10);
  if (!Number.isInteger(scoreNum) || scoreNum <= 0 || scoreNum > 100) {
    res.status(400).json({
      error: 'Invalid score'
    });
    return;
  }

  const gradeId = parseInt(req.params.gradeId, 10);
  const sql = `
    update "grades" set
      "name" = $2,
      "course" = $3,
      "score" = $4
    where "gradeId" = $1
    returning *;
  `;
  const params = [gradeId, name, course, scoreNum];
  db.query(sql, params)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({
          error: `Cannot find grade with "gradeId" ${gradeId}`
        });
      } else {
        res.status(200).json(grade);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.delete('/api/grades/:gradeId', (req, res) => {
  const gradeId = parseInt(req.params.gradeId);

  const sql = `
    delete from "grades"
    where "gradeId" = $1
  `;
  const params = [gradeId];
  db.query(sql, params)
    .then(result => {
      if (!result.rowCount) {
        res.status(404).send({
          error: `Cannot find grade with "gradeId" ${gradeId}`
        });
      } else {
        res.sendStatus(204);
      }
    })
    .catch(err => {
      console.error('err: ', err);
      res.sendStatus(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.listen(3000, () => {
  // eslint-disable-next-line
  console.log('Server listening on port 3000');
});
