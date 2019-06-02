# Preqrequisites
## Node.js
Go to the [node.js](https://nodejs.org/en/) homepage and download and install the latest LTS version of Node.js (version 10.16.0 as of this writing)

# How to run
From this project's root directory, run:

### `npm start`

# Approach
- Decided to keep things super simple and just serve mock data; no database
- Endpoints exist for `GET`, `POST`, and `DELETE` and will modify the original array in-memory
  - Note: if the server is reset, the array of users will revert to the default list