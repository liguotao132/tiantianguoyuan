s._plugins=[];for(var plugin in s.plugins){var p=s.plugins[plugin](s,s.params[plugin]);p&&s._plugins.push(p)}s.callPlugins=function(n){for(var p=0;p<s._plugins.length;p++)n in s._plugins[p]&&s._plugins[p][n](arguments[1],arguments[2],arguments[3],arguments[4],arguments[5])};