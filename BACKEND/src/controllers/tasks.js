const User = require('../models/user');

const tasks = (req, res) => {
    res.json([
        {
            _id:1,
            name:'Task One',
            description:'lorem ipsum',
            date: '2021-07-22T22:44:10.043+00:00'
        },
        {
            _id:2,
            name:'Task Two',
            description:'lorem ipsum',
            date: '2021-07-22T22:44:10.043+00:00'
        },
        {
            _id:3,
            name:'Task Three',
            description:'lorem ipsum',
            date: '2021-07-22T22:44:10.043+00:00'
        },
        {
            _id:4,
            name:'Task Four',
            description:'lorem ipsum',
            date: '2021-07-22T22:44:10.043+00:00'
        }
    ])
}

const privateTasks = (req, res) => {
    res.json([
        {
            _id:1,
            name:'Task One',
            description:'lorem ipsum',
            date: '2021-07-22T22:44:10.043+00:00'
        },
        {
            _id:2,
            name:'Task Two',
            description:'lorem ipsum',
            date: '2021-07-22T22:44:10.043+00:00'
        },
        {
            _id:3,
            name:'Task Three',
            description:'lorem ipsum',
            date: '2021-07-22T22:44:10.043+00:00'
        },
        {
            _id:4,
            name:'Task Four',
            description:'lorem ipsum',
            date: '2021-07-22T22:44:10.043+00:00'
        }
    ])
}

module.exports = {
    tasks, 
    privateTasks
}