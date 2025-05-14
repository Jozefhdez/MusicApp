import React, { useState } from "react";
import { spotifyAPI } from "./api/spotifyAPI";
import "./Dashboard.css";

const Dashboard = () => {
  const selectTypes = [
    "album",
    "artist",
    "playlist",
    "track",
    "show",
    "episode",
    "audiobook",
  ];

  const [search, setSearch] = useState({
    song: "",
    types: "",
  });

  const [deviceID, setDeviceID] = useState("");

  const [results, setResults] = useState([]);

  const handleChange = (e) => {
    const { value, name } = e.target;
    const newFom = {
      ...search,
      [name]: value,
    };
    console.log(newFom);
    setSearch(newFom);
  };

  const handleSearch = async () => {
    const params = new URLSearchParams();

    params.append("q", search.song);
    params.append("type", search.types);

    const queryString = params.toString();
    const url = "https://api.spotify.com/v1/search";

    const updateUrl = `${url}?${queryString}`;
    const token = localStorage.getItem("access_token");

    const response = await spotifyAPI(updateUrl, "GET", null, token);
    console.log(response);
    setResults(response.tracks.items);
  };

  const getDeviceID = async () => {
    const token = localStorage.getItem("access_token");
    const url = "https://api.spotify.com/v1/me/player/devices";
    const response = await spotifyAPI(url, "GET", null, token);

    console.log(response);
    setDeviceID(response.devices[0].id);
  };

  const handlePlay = async (song) => {
    const token = localStorage.getItem("access_token");
    const data = {
      uris: [song],
    };
    const url = `https://api.spotify.com/v1/me/player/play?device_id=${deviceID}`;
    const play = await spotifyAPI(url, "PUT", JSON.stringify(data), token);
    console.log(play);
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-title">Dashboard</div>
      <div className="dashboard-controls">
        <button className="dashboard-button" onClick={getDeviceID}>
          GET DEVICE ID
        </button>
        <input
          className="dashboard-input"
          name="song"
          type="text"
          value={search.song}
          onChange={handleChange}
          placeholder="Search song"
        />
        <select
          className="dashboard-select"
          name="types"
          value={search.types}
          onChange={handleChange}
        >
          {selectTypes.map((type) => (
            <option key={type} value={type}>
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </option>
          ))}
        </select>
        <button className="dashboard-button" onClick={handleSearch}>
          Search
        </button>
      </div>
      <div className="dashboard-results">
        {results.map((result, index) => (
          <div className="dashboard-card" key={index}>
            <img src={result.album.images[0].url} alt="Album Cover" />
            <div className="dashboard-card-artist">{result.name}</div>
            <button
              className="dashboard-card-play"
              onClick={() => handlePlay(result.uri)}
            >
              Play
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
