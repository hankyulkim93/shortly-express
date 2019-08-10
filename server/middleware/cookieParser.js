const parseCookies = (req, res, next) => {
//get cookie in string form
let splitCookie = null;
let cookieString = req.headers.cookie;

  if (cookieString !== undefined) {
    let cookieArray = cookieString.split('; ');
    cookieArray.forEach(function(element) {

      splitCookie = element.split('=');
      req.cookies[splitCookie[0]] = splitCookie[1];
    });
  } else {
    req.cookies = {};
  };
}

module.exports = parseCookies;