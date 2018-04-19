const express = require('express')
const router = express.Router()
const Job_Details = require('../models/JobDetails')

/* GET home page. */
router.get('/', async (req, res) => {
    res.render('index', { title: 'New Application Details' })
})

router.post('/apply', (req, res) => {
    Job_Details.create({
        Company: req.body.company, Position : req.body.position, Date : new Date(), Reply: 'No', Status: 'NA'
    }).then(details => { res.render('index', { message : "Recorded",title: 'New Application Details' }) })
        .catch(error => { console.log("Failed " + error), res.render('index', { title: "New Application Details'", message: "Database Error" }) })
})

router.get('/update', async (req, res) => {
    res.render('update', { title: 'New Application Details' })
})

router.post('/update', (req, res) => {
    Job_Details.update({
        Company: req.body.company, Position : req.body.position},{ Reply: req.body.reply, Status: req.body.status
    }).then(details => {res.render('index', { message : "Updated",title: 'New Application Details' }) })
        .catch(error => { console.log("Failed " + error), res.render('index', { title: "New Application Details'", message: "Database Error" }) })
})


module.exports = router
