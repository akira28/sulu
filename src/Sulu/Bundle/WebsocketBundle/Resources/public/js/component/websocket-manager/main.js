/*
 * This file is part of the Sulu CMS.
 *
 * (c) MASSIVE ART Webservices GmbH
 *
 * This source file is subject to the MIT license that is bundled
 * with this source code in the file LICENSE.
 */

/**
 * Provides Websocket connections
 */
define([
    'websocket/wrapper'
], function(Client) {

    'use strict';

    var defaults = {port: 9876, httpHost: 'localhost', ssl: false};

    return {
        apps: {},

        clients: {},

        config: {},

        url: null,

        init: function(config, apps) {
            this.config = config;
            this.apps = apps;
        },

        getConfig: function(name) {
            return this.config[name] || defaults[name];
        },

        getUrl: function(appName) {
            if (this.url === null) {
                var host = this.getConfig('httpHost'),
                    port = this.getConfig('port'),
                    ssl = this.getConfig('ssl');

                this.url = (ssl ? 'wss://' : 'ws://') + host + ':' + port;
            }

            // TODO generate route with params
            return this.url + this.apps[appName].route;
        },

        getClient: function(appName, tryWebsocket) {
            if (!this.clients[appName]) {
                this.clients[appName] = this.createClient(appName, tryWebsocket);
                this.clients[appName].connect();
            }

            return this.clients[appName];
        },

        createClient: function(appName, tryWebsocket) {
            return new Client(this.apps[appName], this.getUrl(appName), tryWebsocket);
        }
    };
});
