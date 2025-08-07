/// <reference types="vite/client" />

interface ViteTypeOptions {
  // By adding this line, you can make the type of ImportMetaEnv strict
  // to disallow unknown keys.
  strictImportMetaEnv: unknown;
}

interface ImportMetaEnv {
  readonly VITE_APPWRITE_URL: string;
  readonly VITE_APPWRITE_DATABASE_ID: string;
  readonly VITE_APPWRITE_COLLECTION_ID: string;
  readonly VITE_APPWRITE_BUCKET_ID: string;
  readonly VITE_APPWRITE_PROJECT_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
