const app = require('./modules/app/app')
const PORT = process.env.PORT || 8000
const { CLIENT_ORIGIN } = require('./config');
const cors = require('cors');

app.use(cors({
  origin: CLIENT_ORIGIN
}))

app.listen(PORT, () => {
  console.log(`[petful-server] Listening on ${PORT}.`)
})

