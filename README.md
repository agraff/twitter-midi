# http-listener

A simple node application for listening to HTTP requests and logging them to the console. Responds with 200 OK to all requests.

Usage: `node ./http-listener.js [port] [address]`

- `port` is the port to listen on. Optional (although it is required if you want to specify `address`). Defaults to `8888`.
- `address` is the IP address or host name to listen on. Optional. Defaults to `127.0.0.1`.