const express = require('express');
const storeItemController = require('../controllers/storeItemControllers');

const router = express.Router();
router.get('/api/getStoreItem', storeItemController.getStoreItem);  // Fetch all store items
router.post('/api/postStoreItem', storeItemController.postStoreItem);  // Create a new store item
router.patch('/api/updateStoreItem/:storeItemId', storeItemController.updateStoreItem);  // Update store item quantity
router.delete('/api/deleteStoreItem/:storeItemId', storeItemController.deleteStoreItem);  // Delete a store item


module.exports = router;
