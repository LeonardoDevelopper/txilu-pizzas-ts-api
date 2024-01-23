import { google } from 'googleapis'
import path from 'path'
import fs from 'fs'

const CLIENT_ID = '322662765020-uetfhef43bvimuk2k3vgd3oni0b49ign.apps.googleusercontent.com'
const CLIENT_SECRET = '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'
const REDIRECT_URI = "https://developers.google.com/oauthplayground"
const REFESH_TOKEN = "1//044vKqMsA8fUrCgYIARAAGAQSNwF-L9Irv0DWE0sbjed2oxUWfZK2oaC5bucM2YqF73Nnku9MyWccZB1TPTroTIBrBqzwsuehXFE"


const oauth2Client = new google.auth.OAuth2(
    CLIENT_ID,
    CLIENT_SECRET,
    REDIRECT_URI
)

oauth2Client.setCredentials({refresh_token : REFESH_TOKEN})

const drive = google.drive({
    version : 'v3',
    auth : oauth2Client
})
const filePath = './txilu-pizzas-logo-no-background.png'

export async function uploadFile() {
    try{

        const response = await drive.files.create({
            requestBody : {
                name : 'txilu-pizzas-logo-no-background.png',
                mimeType : 'image/png'
            },
            media : {
                mimeType : 'image/png',
                body : fs.createReadStream(filePath)
            }
        })

        console.log(response.data)  
    }catch(error : any) {
        console.log(error.message)
    }
}

export async function deleteFile(id : string) {
    try
    {
        const response = await drive.files.delete({
            fileId: id,
        })
        console.log(response.data, response.status)
        return response.data;
    }catch(error: any){
        console.log(error.message)
        return error.message
    }
}

export async function webViewURL(id : string)
{
    try
    {
        await drive.permissions.create({
            fileId : id,
            requestBody : {
                role: 'reader',
                type : 'anyone'
            }
        })
        const result = await drive.files.get({
            fileId : id,
            fields: 'webViewLink, webContentLink'
        })
        console.log(result.data)
        return result.data
    }catch(error: any){
        console.log(error.message)
        return error.message
    }
}