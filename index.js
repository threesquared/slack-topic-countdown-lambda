const moment = require('moment');
const { WebClient } = require('@slack/client');
const token = process.env.SLACK_TOKEN;
const web = new WebClient(token);
const days = moment().diff('2018-10-30', 'days');

exports.handler = async () => {
    return await web.channels.rename({
		channel: process.env.SLACK_CHANNEL,
		name: Math.abs(days) + '-days-to-CD-reunion'
	});
};
