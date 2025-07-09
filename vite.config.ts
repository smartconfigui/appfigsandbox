import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  console.log("🧪 Loaded env for mode:", mode);
  console.log("🔥 Raw env object:", env);

  return {
    plugins: [react()],
    define: {
      'import.meta.env': {
        ...env,
      },
    },
    build: {
      outDir: 'dist',  // ✅ Hosting folder
      emptyOutDir: true                    // ✅ Clear before writing
    },
    base: './'  // ✅ Make asset paths relative (fixes fonts/images)
  };
});
