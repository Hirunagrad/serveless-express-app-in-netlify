const express = require('express');
//npm install express

const serverless = require('serverless-http');
//npm install serverless-http

const app = express();
const router = express.Router();
const cors = require('cors');

app.use(cors())

router.get('/', cors(), (req, res) => {
    res.json(
        [
            {
                'id': '001',
                'name': 'Smith',
                'email': 'smith@gmail.com'
            },
            {
                'id': '002',
                'name': 'Sam',
                'email': 'sam@gmail.com'
            },
            {
                'id': '003',
                'name': 'lily',
                'email': 'lily@gmail.com'
            }
        ]
    )
});

router.get('/json', cors(), (req, res) => {
    res.json(
        [
            {
                'name': 'nadeeka',
                'id': '1123',
                'uname': 'nadeeka'
            },
            {
                'name': '002',
                'id': '1234',
                'uname': 'gaya'
            },
            {
                'name': 'kavisha',
                'id': '5551',
                'email': 'kavi'
            }
        ]
    )
})

app.use('/', router);
module.exports.handler = serverless(app);

//npm install netlify-cli -g
