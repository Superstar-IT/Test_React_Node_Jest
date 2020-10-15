var express = require('express');
var router = express.Router();

const Username = 'User'
const Password = 'Password'

/* GET users listing. */
router.post('/', function(req, res, next) {
  console.log("Requeset Body: ", req.body)
  if(!req.body.username && !req.body.password)
    res.status(403).send("Provide Username and Password")
  else if(!req.body.username || req.body.username.length < 1)
    res.status(403).send("Provide Username")
  else if(!req.body.password || req.body.password.length < 1)
    res.status(403).send("Provide Password")
  else if (req.body.username && req.body.username != Username)
    res.status(403).send("Invalid Username")
  else if(req.body.password && req.body.password != Password)
    res.status(403).send("Invalid Password")
  else if(req.body.password != Password && req.body.username != Username)
    res.status(403).send("Invalid Username and Password")
  else {
    const data = {
      success: true,
      token: 'Token'
    }
    res.send(JSON.stringify(data))
  }
});

module.exports = router;
