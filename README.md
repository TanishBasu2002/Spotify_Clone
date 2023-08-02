# Full Stack Spotify Clone with Next.js 13.4.13 App Router: React, Tailwind, Supabase, PostgreSQL

This is a repository for a Full Stack Spotify Clone with Next.js 13.4 App Router: React, Tailwind, Supabase, PostgreSQL

Key Features:

- Song Upload
- Tailwind design for sleek UI
- Tailwind animations and transition effects
- Full responsiveness for all devices
- Credential authentication with Supabase
- GitHub authentication integration
- Google authentication integration
- File and image upload using Supabase storage
- Client form validation and handling using react-hook-form
- Server error handling with react-toast
- Play song audio
- Favorites System
- Playlists / Liked Songs system
- Advanced Player component
- How to write POST, GET, and DELETE routes in route handlers ( app/ api )
- How to fetch data in server React components by directly accessing the database (WITHOUT API! like Magic!)
- Handling relations between Server and Child components in a real-time environment

### Prerequisites

**Node version 18.13.0**

### Cloning the repository

```shell
git clone https://github.com/AntonioErdeljac/next13-spotify.git
```

### Install packages

```shell
npm i
```

### Setup .env file


```js
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=

```

### Add SQL Tables
Use `database.sql` file, create songs and liked_songs table

### Start the app

```shell
npm run dev
```

## Available commands

Running commands with npm  `npm run dev`,`npm run build`
