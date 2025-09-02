import config from "../config/config";
import { Client, Databases, Storage, ID, Query } from "appwrite";

interface ICreateArticle {
  title: string;
  slug: string;
  content: string;
  userid?: string;
  status: string;
  featuredimage: string;
}

class AppWriteDB {
  client = new Client();
  database;
  storage;

  constructor() {
    this.client
      .setEndpoint(config.appwriteUrl)
      .setProject(config.appwriteProjectId);
    this.database = new Databases(this.client);
    this.storage = new Storage(this.client);
  }

  async createArticle({
    title,
    slug,
    content,
    userid,
    status,
    featuredimage,
  }: ICreateArticle) {
    try {
      return await this.database.createDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        slug,
        { title, content, userid, status, featuredimage }
      );
    } catch (error) {
      console.log("Appwrite :: createArticle :: ", error);
    }
  }

  async getArticle(slug: string) {
    try {
      return await this.database.getDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        slug
      );
    } catch (error) {
      console.log("Appwrite :: getArticle :: ", error);
    }
  }

  async listArticle() {
    try {
      return await this.database.listDocuments(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        [Query.equal("status", "active")]
      );
    } catch (error) {
      console.log("Appwrite :: listArticle :: ", error);
    }
  }

  async updateArticle({
    title,
    slug,
    content,
    status,
    featuredimage,
  }: ICreateArticle) {
    try {
      return await this.database.createDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        slug,
        { title, content, status, featuredimage }
      );
    } catch (error) {
      console.log("Appwrite :: updateArticle :: ", error);
    }
  }

  async deleteArticle(slug: string) {
    try {
      await this.database.deleteDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        slug
      );
      return true;
    } catch (error) {
      console.log("Appwrite :: updateArticle :: ", error);
      return false;
    }
  }

  //   file upload services

  async uploadImage(file: File) {
    try {
      return await this.storage.createFile(
        config.appwriteBucketId,
        ID.unique(),
        file
      );
    } catch (error) {
      console.log("Appwrite :: storeImage :: ", error);
    }
  }

  async deleteImage(FileID: string) {
    try {
      return await this.storage.deleteFile(config.appwriteBucketId, FileID);
    } catch (error) {
      console.log("Appwrite :: deleteImage :: ", error);
    }
  }

  previewImage(FileID: string) {
    return this.storage.getFilePreview(config.appwriteBucketId, FileID);
  }
}

const appWriteDb = new AppWriteDB();

export default appWriteDb;
