import express from 'express';
const router = express.Router();

/**
 * GET /api/quotes
 * Retrieves all un-hidden quotes
 */
router.get('/', (req, res) => {

});

/**
 * GET /api/quotes/hidden
 * Retrieves all hidden quotes
 */
router.get('/hidden', (req, res) => {

});

/**
 * POST /api/quotes/hide/:id
 * Sets a quote as hidden
 */
router.post('/hide/:id', (req, res) => {

});
module.exports = router;