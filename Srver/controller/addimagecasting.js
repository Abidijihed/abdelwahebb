const { connection } = require("../DataBaseMySQL/config");
module.exports = {
  createcastingimage: (req, res) => {
    const query = `INSERT INTO castingimage(imagee) VALUES("${req.body.imagee}")`;
    connection.query(query, (err, result) => {
      err ? res.status(500).send(err) : res.status(200).send("post added");
    });
  },
  updatecastingimage: (req, res) => {
    const query = `UPDATE castingimage SET  imagee="${req.body.imagee}" WHERE id=${req.params.id}`;
    connection.query(query, (err, result) => {
      err ? res.status(500).send(err) : res.status(200).send("post updated");
    });
  },
  deletecastingimage: (req, res) => {
    const query = `DELETE FROM castingimage WHERE id=${req.params.id}`;

    connection.query(query, (err, result) => {
      err ? res.status(500).send(err) : res.status(200).send("post deleted");
    });
  },
  GetAllPostesimage: (req, res) => {
    const query = `select * from castingimage`;
    connection.query(query, (err, result) =>
      err ? res.status(500).send(err) : res.status(201).send(result)
    );
  },
};
