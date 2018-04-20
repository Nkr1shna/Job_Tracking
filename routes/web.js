const express = require('express')
const router = express.Router()
const Job_Detail = require('../models/JobDetail')
/* GET home page. */

const viewAll = function (res, message, error) {
    Job_Detail.fetchAll().then(jobs => {
        res.render('viewapplied', { error: error, message: message, jobs: jobs.toJSON(), title: 'Application Details' })
    })
}

router.get('/', async (req, res) => {
    viewAll(res)
})

router.get('/apply', (req, res) => {
    res.render('apply', { title: 'Application Details' })
})


router.post('/apply', (req, res) => {
    Job_Detail.create({
        Company: req.body.company, Position: req.body.position, City: req.body.city, State: req.body.state, Date: new Date(), Reply: 'No', Status: 'NA'
    }).then(details => { viewAll(res, message = "Recorded") })
        .catch(error => {
            console.log("Failed " + error);
            if (error.toString().includes("Duplicate")) {
                viewAll(res, null, "You already applied here")
            } else {
                viewAll(res, null, "Error")
            }
        })
})

router.get('/update', async (req, res) => {
    res.render('update', { company: req.query.company, position: req.query.position, title: 'Application Details' })
})

router.post('/update', (req, res) => {
    Job_Detail.update({
        Company: req.body.company, Position: req.body.position
    }, {
        Reply: req.body.reply, Status: req.body.status
        }).then(details => { viewAll(res, message = "Updated") })
        .catch(error => { console.log("Failed " + error), viewAll(res, null, "Error") })
})

router.get('/about', (req, res) => {
    res.render('about', {title: 'Application Details' })
})



module.exports = router
