// Removed reference to missing vite/client
// /// <reference types="vite/client" />

export {};

// Augment the global NodeJS namespace to include API_KEY in ProcessEnv
// This avoids redeclaring the 'process' variable which causes conflicts
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      [key: string]: string | undefined;
      API_KEY: string;
    }
  }
}
