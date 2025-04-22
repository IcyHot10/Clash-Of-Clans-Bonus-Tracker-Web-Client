
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://github.com/IcyHot10/Clash-Of-Clans-Bonus-Tracker-Web-Client/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 807, hash: 'bcf0bfb2c0a9c8fa6416bc62a4b725f92b32aecfa215f8d52f0ac27703210ca9', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1097, hash: '07374281508dca4f129b3c0b9d7a4287cc0a727014ed876474e5bfdad5a7fd4e', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-4CZ5B2VQ.css': {size: 98, hash: '6E8OxkqhkP0', text: () => import('./assets-chunks/styles-4CZ5B2VQ_css.mjs').then(m => m.default)}
  },
};
