import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.catalystmedia.sourcecatalystplus',
  appName: 'source-catalyst',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
