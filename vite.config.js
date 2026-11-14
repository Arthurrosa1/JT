import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Porta própria do Vite (não usar a 5501 do Live Server: os dois podem coexistir
  // em IPv4/IPv6 e o navegador acaba no servidor errado).
  server: { port: 5173, open: true },
  preview: { port: 4173, open: true },
});
