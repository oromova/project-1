import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { usePageStore } from '../store/usePageStore';
import PageForm from '../components/PageForm';

const EditPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const getPageById = usePageStore((state) => state.getPageById);
  const updatePage = usePageStore((state) => state.updatePage);
  const [initialData, setInitialData] = useState(null);

  useEffect(() => {
    const loadPage = async () => {
      const data = await getPageById(id);
      setInitialData(data);
    };
    loadPage();
  }, [id, getPageById]);

  const handleSubmit = async (updatedData) => {
    await updatePage(id, updatedData);
    navigate('/');
  };

  if (!initialData) return <p className="p-4">⏳ Yuklanmoqda...</p>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4"> Sahifani Tahrirlash</h1>
      <PageForm initialData={initialData} onSubmit={handleSubmit} />
    </div>
  );
};

export default EditPage;
