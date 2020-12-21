module.exports = {
	target: 'serverless',
	env: {
		TEST: process.env.TEST,
		GS_CLIENT_EMAIL: process.env.GS_CLIENT_EMAIL,
		GS_PRIVATE_KEY: process.env.GS_PRIVATE_KEY,
	},
}
