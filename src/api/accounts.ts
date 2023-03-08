import express from 'express';
const router = express.Router();

/**
 * GET /api/accounts
 * Retrieves all accounts
 */
router.get('/', (req, res) => {

});

/**
 * POST /api/account
 * Creates a new account
 */
router.post('/', (req, res) => {

});

/**
 * PUT /api/account/:id
 * Updates an existing account
 */
router.put('/:id', (req, res) => {

});

/**
 * GET /api/accounts/:id
 * Retrieves a specific account
 */
router.get('/:id', (req, res) => {

});

/**
 * DELETE /api/accounts/:id
 * Revokes access to an account (flag as deleted)
 */
router.delete('/:id', (req, res) => {

});
module.exports = router;