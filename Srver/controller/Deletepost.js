const { connection } = require("../DataBaseMySQL/config");
module.exports = {
  Deletepost: (req, res) => {
    const query = `DELETE FROM postestext WHRE id=${req.params.id}`;
    connection.query(query, (err, res) => {
      err ? res.status(500).send(err) : res.status(200).send("post deleted");
    });
  },
};
