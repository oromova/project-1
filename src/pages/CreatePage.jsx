import { useNavigate } from 'react-router-dom';
import PageForm from '../components/PageForm';
import { usePageStore } from '../store/usePageStore';

const CreatePage = () => {
  const addPage = usePageStore((state) => state.addPage);
  const navigate = useNavigate();

  const handleSubmit = async (newPageData) => {
    await addPage(newPageData);
    navigate('/'); 
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4"> Yangi Sahifa Yaratish</h1>
      <PageForm onSubmit={handleSubmit} />
    </div>
  );
};

export default CreatePage;
