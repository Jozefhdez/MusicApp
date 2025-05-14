# Music App 🎵

A web application built with **React**, **Vite**, and the **Spotify API** to search, explore, and play music using your Spotify account.

## Features

- Search for tracks, albums, artists, playlists, shows, episodes, and audiobooks
- Play music directly on your connected Spotify devices
- Spotify-inspired user interface
- Easy navigation between register, login, and dashboard

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Jozefhdez/MusicApp
   cd MusicApp
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env` file in the project root with the following variables (get them from your [Spotify Developer Dashboard](https://developer.spotify.com/dashboard/applications)):

   ```
   VITE_SPOTIFY_CLIENT_ID=your_client_id
   VITE_SPOTIFY_REDIRECT_URI=http://localhost:3001
   ```

4. **Start the app:**
   ```bash
   npm run dev
   ```

   The app will be available at [http://localhost:3001](http://localhost:3001)

## Usage

1. Click **START SETUP** to begin the Spotify authentication flow.
2. After authenticating, get your token with **GET TOKEN**.
3. Go to the **Dashboard** and identify your device to search for music and play it on it.

## Requirements

- Node.js 18+
- **Spotify Premium account is required**

## Credits

- [Spotify Web API](https://developer.spotify.com/documentation/web-api)
- Inspired by Spotify's official design