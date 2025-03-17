'use client'

import { useFormState } from 'react-dom';
import { redirect } from 'next/navigation';

import { storePost } from '@/lib/posts';
import FormSubmitBtn from '@/components/AddPost/FormSubmitBtn';

export default function NewPostPage() {
  async function createPost(formData) {
    'use server'
    const title = formData.get('title')
    const image = formData.get('image')
    const content = formData.get('content')

    let errors = {}

    if(!title || title.trim().length === 0) {
      errors.title = "Title is required"
    }
    if(!content || content.trim().length === 0) {
      errors.content = "Content is required"
    }
    if(!image || image.size === 0) {
      errors.image = "Image is required"
    }

    if(Object.keys(errors).length > 0) return errors

    const post = {
      imageUrl: 'https://www.slashgear.com/img/gallery/10-old-school-lexus-models-that-are-still-affordable-for-now/lexus-is-300-1730087299.webp',
      title,
      content,
      userId: 1
    }
    await storePost(post)

    redirect('/feed')
  }

  const [state, formAction] = useFormState(createPost, {})

  return (
    <>
      <h1>Create a new post</h1>
      <form action={formAction}>
        <p className="form-control">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title" required />
        </p>
        <p className="form-control">
          <label htmlFor="image">Image URL</label>
          <input
            type="file"
            accept="image/png, image/jpeg"
            id="image"
            name="image"
            required
          />
        </p>
        <p className="form-control">
          <label htmlFor="content">Content</label>
          <textarea id="content" name="content" rows="5" required/>
        </p>
        <p className="form-actions">
          <FormSubmitBtn />
        </p>
      </form>
    </>
  );
}
