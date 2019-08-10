const parseCookies = (req, res, next) => {
//get cookie in string form

let cookieString = req.headers.cookie;
if (cookieString !== undefined) {
  let newString = cookieString.split('=');
  if (newString.length === 2 ) {
    let cook = newString[1];
    console.log(newString); // ['shortlyid', 'cooookie']
    req.cookies[newString[0]] = cook;
    console.log(req.cookies)
  } else if (newString.length > 2) {
    for (let i = 0; i < newString.length; i++) {
      newString[i].split('; ');
    }

  }
  // let str = newString[0];
  // cookieString.split(';');
} else {
  console.log(cookieString);
  req.cookies = {};
};


//   string.split('=');
// property name, cookie string
// {propertyname: cookie string}
};

module.exports = parseCookies;