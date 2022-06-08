const express = require('express')
const app = express()

app.use(express.json())

app.use(express.urlencoded({
    extended: true
}))

app.get('/', function (req, res) {
  res.send('Hello World')
})


  app.post('/data-diri/:npm/:nama/:prodi', function (req, res) {
    res.json({
              
        nama: req.params.nama,
        npm: req.params.npm,
        prodi:req.params.prodi,
        fakultas: req.query.fakultas,
        tempat_tanggal_lahir: req.query.tempat_tanggal_lahir,
        alamat: req.query.alamat,
        jenis_kelamin:req.query.jenis_kelamin,
        agama: req.body.agama,
        hobi: req.body.hobi,
        telepon:req.body.telepon
    })
  })

app.listen(3000)