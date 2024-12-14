const db = require('../models/database');

exports.getAllWebinars = (req, res) => {
    db.query('SELECT * FROM webinars', (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(200).json(results);
    });
};

exports.registerForWebinar = (req, res) => {
    const { user_id, webinar_id } = req.body;
    const sql = 'INSERT INTO user_webinars (user_id, webinar_id) VALUES (?, ?)';
    db.query(sql, [user_id, webinar_id], (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ message: 'Registered successfully' });
    });
};

exports.getUserWebinars = (req, res) => {
    const { user_id } = req.params;
    const sql = `
        SELECT w.* 
        FROM webinars w 
        JOIN user_webinars uw ON w.id = uw.webinar_id 
        WHERE uw.user_id = ?`;
    db.query(sql, [user_id], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(200).json(results);
    });
};

exports.getAllMerchandise = (req, res) => {
    db.query('SELECT * FROM merchandise', (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(200).json(results);
    });
};

exports.purchaseItem = (req, res) => {
    const { user_id, item_id, item_type } = req.body;
    const sql = 'INSERT INTO purchases (user_id, item_id, item_type) VALUES (?, ?, ?)';
    db.query(sql, [user_id, item_id, item_type], (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ message: 'Purchase successful' });
    });
};
