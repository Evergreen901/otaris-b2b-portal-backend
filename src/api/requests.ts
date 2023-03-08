import express from 'express';
import Requests from '../models/Requests';
const router = express.Router();

/**
 * GET /api/requests
 * Retrieves all un-hidden entries requests on db
 */
router.get('/', async (req, res) => {
    res.json(await Requests.getAll());
});

/**
 * GET /api/requests/:id
 * Retrieves a request with all its information, including original typeform answers
 */
router.get('/:id', async (req, res) => {
    res.json(await Requests.getFull(req.params.id));
});

/**
 * GET /api/requests/hidden
 * Retrieves all hiddden entries
 */
router.get('/hidden', async (req, res) => {
    res.json(await Requests.getHidden());
});

/**
 * POST /api/requests/hide/:id
 * Sets an specific request as hidden
 */
router.post('/hide/:id', async (req, res) => {
    try {
        Requests.setHidden(req.params.id, true);
        res.sendStatus(200);
    } catch (err: unknown) {
        res.status(500).send(err);
    }
});

module.exports = router;