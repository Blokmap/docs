import { nl } from './nl';
import { shared } from './shared';
import { defineConfig } from 'vitepress';

export default defineConfig({
    ...shared,
    locales: {
        root: { label: 'Nederlands', ...nl },
    },
});
