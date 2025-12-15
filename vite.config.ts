import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Lädt Umgebungsvariablen basierend auf dem Modus (development/production)
  // Das dritte Argument '' sorgt dafür, dass alle Variablen geladen werden, nicht nur die mit VITE_
  const env = loadEnv(mode, (process as any).cwd(), '');

  return {
    plugins: [react()],
    define: {
      // WICHTIG: Hier ersetzen wir 'process.env.API_KEY' im Code durch den echten Wert
      // Wir prüfen sowohl auf API_KEY als auch VITE_API_KEY (für Vercel Standards)
      'process.env.API_KEY': JSON.stringify(env.API_KEY || env.VITE_API_KEY),
    },
  };
});