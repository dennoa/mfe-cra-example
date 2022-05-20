# mfe-cra-example

A quick example to test out using CRA with webpack 5 module federation.

### Remote Component Context

It can be important to provide a context to each remote component to 1. avoid element name clashes via a provided `namespace` and 2. allow it to load other resources from its own remote `host` (the server that provides the `remoteEntry.js` file for that remote component).

The [modulefederation.hosts.json](./src/config/modulefederation.hosts.json) file contains the mapping of remotes to the address of their host. It is used by the `modulefederation.config.js` file to determine the remotes and also by the dashboard code to provide the remote components with their context.
