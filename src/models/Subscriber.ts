import mongoose, { Document, Model, Schema } from "mongoose";

export interface ISubscriber extends Document {
  email: string;
  source: string;
  createdAt: Date;
  welcomed: boolean;
}

const SubscriberSchema = new Schema<ISubscriber>(
  {
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, "Please provide a valid email address"],
    },
    source: {
      type: String,
      default: "landing-page",
    },
    welcomed: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Subscriber: Model<ISubscriber> =
  mongoose.models.Subscriber ||
  mongoose.model<ISubscriber>("Subscriber", SubscriberSchema);

export default Subscriber;
