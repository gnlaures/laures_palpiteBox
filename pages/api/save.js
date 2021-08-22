import  { GoogleSpreadsheet } from 'google-spreadsheet'
import moment from 'moment';

const doc = new GoogleSpreadsheet(process.env.SHEET_DOC_ID)

const genCupom = () => {
    const code = parseInt(moment().format('MMYYDDHHMMSSSSS')).toString(16).toUpperCase()
    return code
}

export default async(req, res) => {
    try {
        await doc.useServiceAccountAuth({
            client_email: process.env.SHEET_CLIENT_EMAIL,
            private_key: process.env.SHET_PRIVATE_KEY
        })
        await doc.loadInfo()
        const sheet = doc.sheetsByIndex[1]
        const data = JSON.parse(req.body)

        const sheetConfig = doc.sheetsByIndex[2]
        await sheetConfig.loadCells('A3:B3')
        const mostrarPromocaoCell = sheetConfig.getCell(2, 0);
        const textoPromocaoCell = sheetConfig.getCell(2, 1);

        let Cupom = ''
        let Promo = ''
        if (mostrarPromocaoCell.value === 'VERDADEIRO') {
            Cupom = genCupom();
            Promo = textoPromocaoCell.value
        }

        await sheet.addRow({
            Nome: data.Nome,
            Email: data.Email,
            Whatsapp: data.Whatsapp,
            Cupom: Cupom,
            Promo: Promo,
            'Data Preenchimento': moment().format('DD/MM/YYYY, HH:MM:SS'),
            Nota: parseInt(data.Nota),
        })

        res.end(JSON.stringify({
            showCoupon: Cupom !== '',
            Cupom,
            Promo
        }))
    } catch (err) {
        console.log(err)
        res.end('error');
    }
}