const db = require('../models/database');

// Membuat Webinar Baru
exports.createWebinar = (req, res) => {
    const { title, description, mentor_id, zoom_link, date } = req.body;

    // Validasi input
    if (!title || !mentor_id || !zoom_link || !date) {
        return res.status(400).json({ error: 'All fields are required (title, mentor_id, zoom_link, date).' });
    }

    const sql = `INSERT INTO webinars (title, description, mentor_id, zoom_link, date) 
                 VALUES (?, ?, ?, ?, ?)`;
    db.query(sql, [title, description, mentor_id, zoom_link, date], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ message: 'Webinar created successfully', webinar_id: result.insertId });
    });
};

// Menambahkan Kelas Baru (hasil rekaman webinar)
exports.addClass = (req, res) => {
    const { title, description, price, mentor_id, webinar_id, video_link } = req.body;

    // Validasi input
    if (!title || !price || !mentor_id || !video_link) {
        return res.status(400).json({ error: 'All fields are required (title, price, mentor_id, video_link).' });
    }

    const sql = `INSERT INTO classes (title, description, price, mentor_id, webinar_id, video_link) 
                 VALUES (?, ?, ?, ?, ?, ?)`;
    db.query(sql, [title, description, price, mentor_id, webinar_id || null, video_link], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ message: 'Class added successfully', class_id: result.insertId });
    });
};
