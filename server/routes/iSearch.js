const express = require("express");
const axios = require("axios");
const pool = require("../db");

const server = express.Router();

server.get("/search", async (req, res) => {
  const { query } = req;
  //test const { search, page = 1, limit = 10 } = query;

  if (!search) {
    return res.status(400).json({ error: "Search query is required" });
  }

  try {
    //test const offset = (page - 1) * limit;
    const response = await axios.get(` https://itunes.apple.com/search`, {
      params: { term: search, limit },
    });

    const results = response.data.results;

    for (const result of results) {
      const trackId = result.trackId;
      const trackName = result.trackName;
      const artistName = result.artistName;
      const artworkUrl = result.thumbnail;

      try {
        await pool.query(
          `INSERT INTO podcasts (track_id, track_name, artist_name, thumbnail)
           VALUES ($1, $2, $3, $4)
           ON CONFLICT (track_id) DO NOTHING`,
          [trackId, trackName, artistName, artworkUrl]
        );
      } catch (dbError) {
         //test console.error("DB Insert Error:", dbError.message);
      }
    }

    res.json(results);
  } catch (error) {
     //test console.error(error);
  }
});

module.exports = server;
