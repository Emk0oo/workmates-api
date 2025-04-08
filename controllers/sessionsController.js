const db = require('../config/db');

exports.getAllSessions = async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM sessions');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getSessionById = async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM sessions WHERE id = ?', [req.params.id]);
    if (rows.length === 0) return res.status(404).json({ message: 'Session not found' });
    res.json(rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createSession = async (req, res) => {
  const {
    nom,
    adresse_numero,
    adresse_rue,
    code_postal,
    ville,
    date_debut,
    date_fin,
    user_id // Id du user créateur (proviendra plus tard du token)
  } = req.body;

  try {
    const [result] = await db.query(
      `INSERT INTO sessions 
      (nom, adresse_numero, adresse_rue, code_postal, ville, date_debut, date_fin, user_id)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      [nom, adresse_numero, adresse_rue, code_postal, ville, date_debut, date_fin, user_id]
    );
    res.status(201).json({ id: result.insertId, ...req.body });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateSession = async (req, res) => {
  const {
    nom,
    adresse_numero,
    adresse_rue,
    code_postal,
    ville,
    date_debut,
    date_fin
  } = req.body;

  try {
    await db.query(
      `UPDATE sessions SET 
      nom = ?, adresse_numero = ?, adresse_rue = ?, code_postal = ?, ville = ?, 
      date_debut = ?, date_fin = ?
      WHERE id = ?`,
      [nom, adresse_numero, adresse_rue, code_postal, ville, date_debut, date_fin, req.params.id]
    );
    res.json({ id: req.params.id, ...req.body });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteSession = async (req, res) => {
  try {
    await db.query('DELETE FROM sessions WHERE id = ?', [req.params.id]);
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
