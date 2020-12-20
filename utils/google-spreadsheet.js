import { GoogleSpreadsheet } from 'google-spreadsheet';

export const authenticateMe = async () => {
    const doc= new GoogleSpreadsheet("1tC0trhLw-WgVACy6PJODIng2XsivoO_DUJ0mSpTbW-U")
    await doc.useServiceAccountAuth({
        client_email: process.env.GS_CLIENT_EMAIL,
        private_key: process.env.GS_PRIVATE_KEY,
      });
    return doc
}