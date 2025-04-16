
export default {
  basePath: '/Clash-Of-Clans-Bonus-Tracker-Web-Client',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
