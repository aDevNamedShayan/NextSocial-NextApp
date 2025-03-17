"use server";

import { redirect } from "next/navigation";

import { storePost } from "../lib/posts";

export async function createPost(prevState, formData) {
  const title = formData.get("title");
  const image = formData.get("image");
  const content = formData.get("content");

  let errors = {};

  if (!title || title.trim().length === 0) {
    errors.title = "Title is required";
  }
  if (!content || content.trim().length === 0) {
    errors.content = "Content is required";
  }
  if (!image || image.size === 0) {
    errors.image = "Image is required";
  }

  if (Object.keys(errors).length > 0) return errors;

  const post = {
    imageUrl:
      "https://www.slashgear.com/img/gallery/10-old-school-lexus-models-that-are-still-affordable-for-now/lexus-is-300-1730087299.webp",
    title,
    content,
    userId: 1,
  };
  await storePost(post);

  redirect("/feed");
}