const fs = require("fs");
const moment = require("moment-timezone");

module.exports.config = {
	name: "info",
	version: "1.0.1",
	aliases: ["info", "Info", "in", "fo"],
	role: 0,
	credits: "cliff",
	description: "Admin and Bot info.",
	cooldown: 5,
	hasPrefix: false,
};

module.exports.run = async function({ api, event, args }) {
	let time = process.uptime();
	let years = Math.floor(time / (60 * 60 * 24 * 365));
	let months = Math.floor((time % (60 * 60 * 24 * 365)) / (60 * 60 * 24 * 30));
	let days = Math.floor((time % (60 * 60 * 24 * 30)) / (60 * 60 * 24));
	let weeks = Math.floor(days / 7);
	let hours = Math.floor((time % (60 * 60 * 24)) / (60 * 60));
	let minutes = Math.floor((time % (60 * 60)) / 60);
	let seconds = Math.floor(time % 60);
	const uptimeString = `${years > 0 ? `${years} years ` : ''}${months > 0 ? `${months} months ` : ''}${weeks > 0 ? `${weeks} weeks ` : ''}${days % 7 > 0 ? `${days % 7} days ` : ''}${hours > 0 ? `${hours} hours ` : ''}${minutes > 0 ? `${minutes} minutes ` : ''}${seconds} seconds`;

	const prefix = "/";
	const CREATORLINK = "https://www.facebook.com/Im.Rafi.6969";
	const BOTCREATOR = "Light_X_Rafi";
	const BOTNAME = "Junpi";
	const FILESOWNER = "Rafi";
	const juswa = moment.tz("Asia/Dhaka").format("『D/MM/YYYY』 【HH:mm:ss】");
	const link = ["https://i.imgur.com/9LDVC57.mp4", "https://i.imgur.com/r7IxgiR.mp4", "https://i.imgur.com/J1jWubu.mp4", "https://i.imgur.com/DJylTiy.mp4", "https://i.imgur.com/v4mLGte.mp4", "https://i.imgur.com/uthREbe.mp4", "https://i.imgur.com/ee8fHna.mp4", "https://i.imgur.com/VffzOwS.mp4", "https://i.imgur.com/ci5nztg.mp4", "https://i.imgur.com/qHPeKDV.mp4", "https://i.imgur.com/Rkl5UmH.mp4"];

	const callback = () => {
		api.sendMessage({
			body: `➢ Admin and Bot Information

⁂ Bot Name: ${BOTNAME}
✧ Bot Admin: ${BOTCREATOR}
♛ Bot Admin Link: ${CREATORLINK}
❂ Bot Prefix: ${prefix}
✫ Files Owner: ${FILESOWNER}
➟ UPTIME ${uptimeString}
✬ Today is: ${juswa} 

➳ Bot is running ${hours}:${minutes}:${seconds}.
✫ Thanks for using my bot`,
			attachment: fs.createReadStream(__dirname + "/owner_video.mp4")
		}, event.threadID, () => fs.unlinkSync(__dirname + "/owner_video.mp4"));
	};

	const linkIndex = Math.floor(Math.random() * link.length);
	return request(encodeURI(link[linkIndex])).pipe(fs.createWriteStream(__dirname + "/owner_video.mp4")).on("close", callback);
};
