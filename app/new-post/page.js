"use client";

import { useFormState } from "react-dom";

import FormSubmitBtn from "@/components/AddPost/FormSubmitBtn";
import { createPost } from "@/actions/posts";

export default function NewPostPage() {
  const [state, formAction] = useFormState(createPost, {});

  return (
    <>
      <h1>Create a new post</h1>
      <form action={formAction}>
        <p className="form-control">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title" />
          {state.title && <p className="form-errors">{state.title}</p>}
        </p>
        <p className="form-control">
          <label htmlFor="image">Image</label>
          <input
            type="file"
            accept="image/png, image/jpeg"
            id="image"
            name="image"
          />
          {state.image && <p className="form-errors">{state.image}</p>}
        </p>
        <p className="form-control">
          <label htmlFor="content">Content</label>
          <textarea id="content" name="content" rows="5" />
          {state.content && <p className="form-errors">{state.content}</p>}
        </p>
        <p className="form-actions">
          <FormSubmitBtn />
        </p>
      </form>
    </>
  );
}
