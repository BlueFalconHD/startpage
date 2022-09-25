import * as icons from 'lucide-react';

const validIcons = Object.keys(icons)
const validEngines = ['duckduckgo', 'google'];

const checkIcon = (iconName) => {
  if (validIcons.includes(iconName)) {
    return true;
  } else {
    return false;
  }
};

const checkEngine = (engineName) => {
  if (validEngines.includes(engineName)) {
    return true;
  } else {
    return false;
  }
};

const validate = (iconName, engineName) => {
  if (checkIcon(iconName) && checkEngine(engineName)) {
    return true;
  } else {
    return false;
  }
}

export {validate};
