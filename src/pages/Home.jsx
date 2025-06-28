import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { usePageStore } from '../store/usePageStore';

const Home = () => {
  const { pages, fetchPages, deletePage, loading } = usePageStore();

  useEffect(() => {
    fetchPages();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm('Haqiqatan ham ushbu sahifani o‘chirmoqchimisiz?')) {
      await deletePage(id);
      await fetchPages();
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Sahifalar Ro‘yxati</h1>
        <Link
          to="/create"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
         Yangi sahifa qo'shish
        </Link>
      </div>

      {loading && <p>⏳ Yuklanmoqda...</p>}

      {!loading && pages.length === 0 && <p>❗️ Hech qanday sahifa topilmadi.</p>}

      <ul className="space-y-4">
        {pages.map((page) => (
          <li
            key={page.id}
            className="border rounded p-4 flex justify-between items-center"
          >
            <div>
              <h2 className="text-lg font-semibold">{page.title}</h2>
              <p className="text-sm text-gray-500">Slug: {page.slug || '/'}</p>
            </div>
            <div className="flex gap-2">
              <Link
                to={`/edit/${page.id}`}
                className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
              >
                Tahrirlash
              </Link>
              <button
                onClick={() => handleDelete(page.id)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                O‘chirish
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
