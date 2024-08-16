/// <reference types="astro/client" />
interface ImportMetaEnv {
    readonly API_FOOTBALL_KEY: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
