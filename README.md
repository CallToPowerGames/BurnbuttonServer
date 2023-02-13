# Burnbutton - server

A burnbutton server.

## Usage

### Install dependencies

* `cd app`
* `npm install`
* `npm install -g forever`

### Configuration

Change the configurations in `config/*.js` if necessary.

### Production: Run server.js in the background

The application server will be started as a daemon, and forever is taking care about failures and issues.

* `cd app`
* `export NODE_ENV=production`
* `forever stopall`
* `forever start server.js`

### Development: Run server.js

The application server will be started, but not as a daemon.

* `cd app`
* `npm run dev` for live updates or `node server.js`
* Navigate to http://localhost:3003/burnbutton/
