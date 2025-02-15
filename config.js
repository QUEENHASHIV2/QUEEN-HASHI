const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "lHFViYjR#OaB1GXUER2IX1UYklyNuxNj4ziIDXXY69bU1D-TtlGw",
MODE: process.env.MODE || "public",  // Add Your Bot Mode (groups/privet/public)
PREFIX: process.env.PREFIX || ".",   // Add Your Custom Prefix 
OWNER_REACT: process.env.OWNER_REACT || "true", // true or false
BOT_NAME: process.env.BOT_NAME || "𝐐𝐔𝐄𝐄𝐍 𝐇𝐀𝐒𝐇𝐈 𝐌𝐃 𝐕2",
AUTO_VOICE: process.env.AUTO_VOICE || "true", // true or false
AUTO_STICKER: process.env.AUTO_STICKER || "true", // true or false
AUTO_REPLY: process.env.AUTO_REPLY || "true", // true or false
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true", // true or false
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "true", // true or false
ANTI_LINK: process.env.ANTI_LINK || "false", // true or false
ANTI_BAD: process.env.ANTI_BAD || "true",// true or false
FAKE_RECORDING: process.env.FAKE_RECORDING || "true", // true or false
AUTO_REACT: process.env.AUTO_REACT || "true", // true or false
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true", // true or false
FILENAME: process.env.FILENAME || "QUEEN-ESHU-MD-V1",
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/nWJqfPb/mrgmax.jpg", 
CHANNEL_NAME: process.env.CHANNEL_NAME || "𝐐𝐔𝐄𝐄𝐍 𝐇𝐀𝐒𝐇𝐈 𝐌𝐃 𝐕2",
NEWSLETTER_ID: process.env.NEWSLETTER_ID || "120363378635880298@newsletter",
TITLE: process.env.TITLE || "𝐐𝐔𝐄𝐄𝐍 𝐇𝐀𝐒𝐇𝐈 𝐌𝐃 𝐕2",
BODY: process.env.BODY || "CREATED BY AKINDU",
WEBURL: process.env.WEBURL|| "",
BOT_IMG: process.env.BOT_IMG || "https://i.ibb.co/nWJqfPb/mrgmax.jpg"     
};
