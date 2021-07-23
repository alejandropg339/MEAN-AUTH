const { Router } = require('express');
const { registerUser } = require('../controllers/signup');
const { loginUser } = require('../controllers/login');
const { tasks, privateTasks } = require('../controllers/tasks');
const { verifyJwt } = require('../../middlewares/verify-jwt');

const router = Router();

router.get('/', (req, res) => {
    res.send('Hello world')
});

router.post('/signup', registerUser);

router.post('/signin', loginUser);

router.get('/tasks', tasks)

router.get('/private-tasks', verifyJwt, privateTasks)

module.exports = router;