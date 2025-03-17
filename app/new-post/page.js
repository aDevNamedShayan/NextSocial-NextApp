import { storePost } from '@/lib/posts';

export default function NewPostPage() {
  async function createPost(formData) {
    'use server'
    const title = formData.get('title')
    const image = formData.get('image')
    const content = formData.get('content')

    const post = {
      imageUrl: 'https://www.slashgear.com/img/gallery/10-old-school-lexus-models-that-are-still-affordable-for-now/lexus-is-300-1730087299.webp',
      title,
      content,
      userId: 1
    }
    storePost(post)
  }

  return (
    <>
      <h1>Create a new post</h1>
      <form action={createPost}>
        <p className="form-control">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title" />
        </p>
        <p className="form-control">
          <label htmlFor="image">Image URL</label>
          <input
            type="file"
            accept="image/png, image/jpeg"
            id="image"
            name="image"
          />
        </p>
        <p className="form-control">
          <label htmlFor="content">Content</label>
          <textarea id="content" name="content" rows="5" />
        </p>
        <p className="form-actions">
          <button type="reset">Reset</button>
          <button>Create Post</button>
        </p>
      </form>
    </>
  );
}
