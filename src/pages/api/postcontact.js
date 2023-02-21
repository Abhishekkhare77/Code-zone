import * as fs from 'fs'
export default async function handler(req, res) {
    if (req.method === 'POST') {
        let data = fs.promises.readdir("contactdata")
      fs.promises.writeFile(`contactdata/${(await data).length+1}.json`,JSON.stringify(req.body),()=>{})
      res.status(200).json("Post request has been sent")
    } else {
      res.status(200).json("This is the other http request")
    }
  }