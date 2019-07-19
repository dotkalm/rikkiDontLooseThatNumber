const express = require('express')

const app = express()
const songRoutes = require('./routes/songRoutes')

require('./db/db')

app.use(express.json());
app.use(express.urlencoded())
app.use('/rikkiDontLooseThatNumber', songRoutes);

app.listen(3000, () => {
    console.log('server running on port 3000')
})