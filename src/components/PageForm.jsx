import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function PageForm({ initialData = {}, onSubmit }) {
  const [title, setTitle] = useState(initialData.title || '');
  const [slug, setSlug] = useState(initialData.slug || '');
  const [metaKeywords, setMetaKeywords] = useState(initialData.metaKeywords || '');
  const [content, setContent] = useState(initialData.content || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, slug, metaKeywords, content });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4">
      <input
        className="w-full border p-2"
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        className="w-full border p-2"
        type="text"
        placeholder="Slug (optional)"
        value={slug}
        onChange={(e) => setSlug(e.target.value)}
      />
      <input
        className="w-full border p-2"
        type="text"
        placeholder="Meta Keywords"
        value={metaKeywords}
        onChange={(e) => setMetaKeywords(e.target.value)}
      />
      <ReactQuill value={content} onChange={setContent} />
      <button className="bg-blue-600 text-white px-4 py-2 rounded" type="submit">
        Save Page
      </button>
    </form>
  );
}
