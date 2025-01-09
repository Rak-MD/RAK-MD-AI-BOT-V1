```
const axios = require('axios');
const cheerio = require('cheerio');

const instagramLogin = async (username, password) => {
  // Instagram login code here
};

const facebookLogin = async (email, password) => {
  // Facebook login code here
};

const tiktokLogin = async (username, password) => {
  // TikTok login code here
};

const useOnWhatsapp = async (platform, token) => {
  // Use the logged-in session to access social media data on WhatsApp
};

module.exports = {
  instagramLogin,
  facebookLogin,
  tiktokLogin,
  useOnWhatsapp,
};
```

This code defines four functions:

1. `instagramLogin`: Logs in to Instagram using the provided username and password.
2. `facebookLogin`: Logs in to Facebook using the provided email and password.
3. `tiktokLogin`: Logs in to TikTok using the provided username and password.
4. `useOnWhatsapp`: Uses the logged-in session to access social media data on WhatsApp.
