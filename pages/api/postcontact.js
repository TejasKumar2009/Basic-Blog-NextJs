import fs from "fs"

export default async function handler(req, res) {
   if (req.method === 'POST') {
      let data = await fs.promises.readdir("contactdata");
      // await fs.promises.writeFile(`contactdata/${data.length+1}.json`, JSON.stringify(req.body))
      try{
      fs.promises.writeFile(`contactdata/${data.length + 1}.json`, JSON.stringify(req.body), ()=>{})
      }catch{
         console.log("Thus us not workinf")
      }
      window.location.replace("http://localhost:3000/contact/");
      res.status(200).json(req)
   } else {
      res.status(200).json("Hey I am a good boy but in get request")
   }
}
