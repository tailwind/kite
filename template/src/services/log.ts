/* eslint-disable no-console */
import { config } from 'src/services/config';

const logLevels = {
  verbose: 5,
  debug: 4,
  info: 3,
  warn: 2,
  error: 1,
  silent: 0,
};

function verbose(...args: any[]) {
  if (config.env === 'development' && logLevels[config.logLevel] >= 5) console.log(...args);
}

function debug(...args: any[]) {
  if (config.env === 'development' && logLevels[config.logLevel] >= 4) console.debug(...args);
}

function info(...args: any[]) {
  if (config.env === 'development' && logLevels[config.logLevel] >= 3) console.info(...args);
}

function warn(...args: any[]) {
  if (config.env === 'development' && logLevels[config.logLevel] >= 2) console.warn(...args);
}

function error(...args: any[]) {
  if (config.env === 'development' && logLevels[config.logLevel] >= 1) console.error(...args);
}

export const log = {
  verbose,
  info,
  debug,
  warn,
  error,
};
