const express = require('express')
const userRouter = require('./routes/user.routes')
const postRouter = require('./routes/post.routes')
const cors = require('cors')

const PORT = process.env.port || 8080
const host = 'localhost'

const app = express()


app.use(express.json())
app.use(cors())
app.use('/api', userRouter)
app.use('/api', postRouter)



app.get('/',  (req, res) => {
    res.send('GET request to the homepage');
});



app.listen(PORT, () => console.log('server is running on port ' + PORT))

// const requestListener = function (req, res) {
//     res.writeHead(200);
//     res.end("<h1>GGG</h1>");
// };

// const server = http.createServer(requestListener);
// server.listen(PORT, host, () => {
//     console.log(`Server is running on http://${host}:${PORT}`);
// });