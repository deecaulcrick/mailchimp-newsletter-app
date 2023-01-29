require('dotenv').config()

const express = require('express')
const request = require('request')
const bodyParser = require('body-parser')

const app = express()

const PORT = process.env.PORT || 3000;

//BodyParser MiddleWare
app.use(bodyParser.urlencoded({extended: true}))

//Static Files
app.use(express.static("public"));

//Signup Route
app.post('/', (req, res) => {
    const { fName, lName, email } = req.body;

    //Form Validation to make sure forms are not empty
    if(!fName || !lName || !email) {
        res.redirect('/fail.html');
        return;
    }

    //Request Data
    const data = {
        members: [
            {
                email_address: email,
                status: 'subscribed',
                merge_fields: {
                    FNAME: fName,
                    LNAME: lName
                }
            }
        ]
    }

    const postData = JSON.stringify(data)

    const options = {
        url: `https://us20.api.mailchimp.com/3.0/lists/${process.env.MAILCHIMP_AUDIENCE_ID}`,
        method: 'POST',
        headers: {
            Authorization: process.env.MAILCHIMP_API_KEY
        },
        body: postData,
    }

    request(options, (err, response, body) => {
        if(err){
            res.redirect('/fail.html')
            console.log(err);
        } else {
            if(response.statusCode === 200){
                res.redirect('/success.html')
            } else{
                res.redirect('/fail.html')
                console.log(err);
            }
        }
    })
})




app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
})