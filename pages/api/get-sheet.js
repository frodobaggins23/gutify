import { authenticateMe } from '../../utils/google-spreadsheet'
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

let doc

export default async (req, res) => {
	try {
		if (!doc) {
			doc = await authenticateMe()
		}
		await doc.loadInfo()
		const sheet = doc.sheetsByIndex[0]
		await sheet.addRow({ timestamp: new Date(Date.now()).toLocaleString(), ...req.body })
		res.statusCode = 200
		res.json({ status: 'saved' })
	} catch (error) {
		res.statusCode = 500
		res.json({ status: 'failed', error })
	}
}
