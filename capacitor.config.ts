import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.lutoys.telegramautopost',
  appName: 'Telegram AutoPost',
  webDir: 'webapp',
  bundledWebRuntime: false,
  server: {
    androidScheme: 'https'
  }
};

export default config;
