// Environment variables import so we can use directly in our app without ant hesitation and type check

interface IConfig {
  appwriteUrl: string;
  appwriteProjectId: string;
  appwriteDatabaseId: string;
  appwriteCollectionId: string;
  appwriteBucketId: string;
}

const config: IConfig = {
  appwriteUrl: import.meta.env.VITE_APPWRITE_URL,
  appwriteProjectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,
  appwriteDatabaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID,
  appwriteCollectionId: import.meta.env.VITE_APPWRITE_COLLECTION_ID,
  appwriteBucketId: import.meta.env.VITE_APPWRITE_BUCKET_ID,
};

export default config;
