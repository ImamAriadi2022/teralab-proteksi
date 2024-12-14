const db = require('../models/database');

// Melihat daftar user
exports.getUsers = (req, res) => {
    const sql = 'SELECT id, name, email, role, verified FROM users';
    db.query(sql, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(200).json(results);
    });
};

// Melihat daftar mentor yang belum diverifikasi
exports.getUnverifiedMentors = (req, res) => {
    const sql = 'SELECT id, name, email FROM users WHERE role = "mentor" AND verified = FALSE';
    db.query(sql, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(200).json(results);
    });
};

// Memverifikasi mentor baru
exports.verifyMentor = (req, res) => {
    const { mentor_id } = req.body;

    if (!mentor_id) {
        return res.status(400).json({ error: 'Mentor ID is required.' });
    }

    const sql = 'UPDATE users SET verified = TRUE WHERE id = ? AND role = "mentor"';
    db.query(sql, [mentor_id], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Mentor not found or already verified.' });
        }
        res.status(200).json({ message: 'Mentor verified successfully.' });
    });
};

// Melihat daftar webinar
exports.getWebinars = (req, res) => {
    const sql = 'SELECT * FROM webinars';
    db.query(sql, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(200).json(results);
    });
};

// Melihat daftar kelas
exports.getClasses = (req, res) => {
    const sql = 'SELECT * FROM classes';
    db.query(sql, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(200).json(results);
    });
};

// CRUD Merchandise

// Melihat semua merchandise
exports.getMerchandise = (req, res) => {
    const sql = 'SELECT * FROM merchandise';
    db.query(sql, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(200).json(results);
    });
};

// Menambahkan merchandise baru
exports.addMerchandise = (req, res) => {
    const { name, price, stock } = req.body;

    if (!name || !price || !stock) {
        return res.status(400).json({ error: 'All fields are required (name, price, stock).' });
    }

    const sql = 'INSERT INTO merchandise (name, price, stock) VALUES (?, ?, ?)';
    db.query(sql, [name, price, stock], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ message: 'Merchandise added successfully', merchandise_id: result.insertId });
    });
};

// Memperbarui merchandise
exports.updateMerchandise = (req, res) => {
    const { id, name, price, stock } = req.body;

    if (!id || !name || !price || !stock) {
        return res.status(400).json({ error: 'All fields are required (id, name, price, stock).' });
    }

    const sql = 'UPDATE merchandise SET name = ?, price = ?, stock = ? WHERE id = ?';
    db.query(sql, [name, price, stock, id], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Merchandise not found.' });
        }
        res.status(200).json({ message: 'Merchandise updated successfully.' });
    });
};

// Menghapus merchandise
exports.deleteMerchandise = (req, res) => {
    const { id } = req.params;

    if (!id) {
        return res.status(400).json({ error: 'Merchandise ID is required.' });
    }

    const sql = 'DELETE FROM merchandise WHERE id = ?';
    db.query(sql, [id], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Merchandise not found.' });
        }
        res.status(200).json({ message: 'Merchandise deleted successfully.' });
    });
};
