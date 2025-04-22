
export default {
  basePath: 'https://github.com/IcyHot10/Clash-Of-Clans-Bonus-Tracker-Web-Client',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
