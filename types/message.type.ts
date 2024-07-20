import { Document } from "mongoose";

interface IMessage extends Document {
  sender: {
    username: string;
  };
  recipient: {
    username: string;
  };
  property: {
    name: string;
  };
  name: string;
  email: string;
  phone?: string;
  body?: string;
  read: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export default IMessage;
