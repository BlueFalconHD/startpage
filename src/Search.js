import {config} from './Config.js'

const engines = {
  'duckduckgo':'https://duckduckgo.com/?q=%s',
  'google':'https://www.google.com/search?q=%s'
};

const search = (term) => {
  let dummy = engines[config['search-engine']];
  return dummy.replace('%s', term);
};

const open = (term) => {
  let url = search(term);
  window.open(url, '_blank');
  return;
};

export {open};