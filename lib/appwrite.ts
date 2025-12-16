// lib/appwrite.ts
import { Client, ID, Models, TablesDB } from "appwrite";

const APPWRITE_DB = process.env.NEXT_PUBLIC_APPWRITE_DB_ID as string
const MESSAGES_TABLE = process.env.NEXT_PUBLIC_APPWRITE_MESSAGES_TABLE as string

export type MessagePayload = {
  name: string;
  email: string;
  message: string;
};

const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID as string);

const tablesDB: TablesDB = new TablesDB(client);

export async function sendMessage(data: MessagePayload): Promise<Models.Row> {
  return await tablesDB.createRow({
      databaseId: APPWRITE_DB,
      tableId: MESSAGES_TABLE,
      rowId: ID.unique(),
      data: {
        name: data.name,
        email: data.email,
        message: data.message,
      }
    });
}