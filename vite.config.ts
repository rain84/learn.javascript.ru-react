import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolveAlias } from './utils'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    ...(await resolveAlias()),
  },
})
