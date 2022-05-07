const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const blogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    body: { type: String, required: true, trim: true },
    authorId: { type: ObjectId, ref: "Author", required: true, trim: true },
    tags: [String],
    category: { type: String, required: true, trim: true },
    subcategory: [String],
    deletedAt: Date,
    isDeleted: { type: Boolean, default: false, trim: true },
    isPublished: { type: Boolean, default: false, trim: true },
    publishedAt: Date,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Blog", blogSchema);
