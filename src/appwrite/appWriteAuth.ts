import { Client, Account, ID } from "appwrite";
import config from "../config/config";

interface IAuth {
  email: string;
  password: string;
  name?: string;
}

class AppWriteAuth {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(config.appwriteUrl)
      .setProject(config.appwriteProjectId);
    this.account = new Account(this.client);
  }

  async signup({ email, password, name }: IAuth) {
    try {
      const userDetail = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userDetail) {
        return userDetail;
      } else {
        return userDetail;
      }
    } catch (error) {
      console.log("Appwrite error :: signup ::", error);
    }
  }

  async login({ email, password }: IAuth) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      console.log("Appwrite error :: login ::", error);
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log("Appwrite error :: getCurrentUser :: ", error);
    }
    return null;
  }

  async logout() {
    try {
      return await this.account.deleteSessions();
    } catch (error) {
      console.log("Appwrite error :: logout :: ", error);
    }
  }
}

const appwriteauth = new AppWriteAuth();

export default appwriteauth;
