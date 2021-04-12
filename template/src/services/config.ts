import { LOG_LEVEL, NODE_ENV } from 'react-native-dotenv';

export const config = {
  env: NODE_ENV || 'development',
  logLevel: LOG_LEVEL || 'verbose',

  dev: {
    whyDidYouRender: false,
    serializableCheck: false,
    immutableCheck: false,
  },
} as const;
