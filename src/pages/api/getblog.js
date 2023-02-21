//http://localhost:3000/api/getblog?slug=learn-app
import * as fs from 'fs'
export default function handler(req, res) {
  fs.readFile(`blogdata/${req.query.slug}.json`,"utf-8",(err,data)=>{
    if(err){
        res.status(500).json({err:"No such blog available"})
    }
    res.status(200).json(JSON.parse(data))
})
}
