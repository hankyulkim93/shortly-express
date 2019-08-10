const models = require('../models');
const Promise = require('bluebird');
const utils = require('../lib/hashUtils');
const cookieParser = require('./cookieParser');

module.exports.createSession = (req, res, next) => {
  if (req.cookies = {}) {
    // console.log("what is our current session before the create? : ", req.session);
    models.Sessions.create()
    .then((session) => {
      // console.log(session);
      req.session = session;
      // console.log('Now assigned:', req.session);
    }).then(() => {
      //we need to get the information of the newly created sessions from our dataBase so that we have access to its hash value.
      // once we have the value of hash, then we can assign it to req.session.hash.

      //FIND COOKIE GENERATOR ON OFFICAL DOCS. ASSOCIATE COOKIE STRING WITH HASH. (TODO).
      models.Sessions.get({id: req.session.insertId})
      .then((sessionRecord) => {
        console.log('passes the get');
        req.session.hash = sessionRecord.hash;
        next();
      }).catch(() => {
        console.log('dan yer wrong');
      })
    })
  } else {

  }

};

/************************************************************/
// Add additional authentication middleware functions below
/************************************************************/

//need to create middleware that generates a cookie string. Using .createRandom40String to generate our 40 char string we then have to add the string "shortlyid=" to the front. Then parse the string into the appropriate object using cookieParser
module.exports.cookieMaker = (req, res, next) => {
  var halfCookieString = utils.createRanodm40String();
  var cookieString = "shortlyid=" + halfCookieString;
next();

}