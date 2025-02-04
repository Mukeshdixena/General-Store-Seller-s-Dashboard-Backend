const StoreItem = require('../models/storeItem');

exports.getStoreItem = (req, res, next) => {
    StoreItem.findAll()
        .then(storeItems => {
            res.status(200).json({ message: 'Fetched StoreItems successfully!', data: storeItems });
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({ message: 'Something went wrong!' });
        });
};

exports.postStoreItem = (req, res, next) => {
    const { name, description, quantity } = req.body;  // Added price

    StoreItem.create({
        name: name,
        description: description,
        quantity: quantity,
    })
        .then(result => {
            res.status(201).json({ message: 'StoreItem created successfully!', data: result });
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({ message: 'Something went wrong!' });
        });
};

exports.deleteStoreItem = (req, res, next) => {
    const { id } = req.params;
    console.log(id)

    StoreItem.findByPk(id)
        .then(storeItem => {
            if (!storeItem) {
                return res.status(404).json({ message: 'StoreItem not found!' });
            }
            return storeItem.destroy();
        })
        .then(() => {
            res.status(200).json({ message: 'StoreItem deleted successfully!' });
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({ message: 'Something went wrong!' });
        });
};

exports.updateStoreItem = (req, res, next) => {
    const { id } = req.params;
    const { name, description, quantity } = req.body;

    StoreItem.findByPk(id)
        .then(storeItem => {
            if (!storeItem) {
                return res.status(404).json({ message: 'StoreItem not found!' });
            }
            return storeItem.update({ name, description, quantity });  // Updated fields
        })
        .then(updatedItem => {
            res.status(200).json({ message: 'StoreItem updated successfully!', data: updatedItem });
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({ message: 'Something went wrong!' });
        });
};
