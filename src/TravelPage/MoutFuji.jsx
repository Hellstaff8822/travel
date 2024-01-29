import { useNavigate } from 'react-router-dom';

export const MountFuji = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate('/');
  };

  return (
    <div>
      <h2>Mount Fuji Page</h2>
      <button onClick={handleGoBack}>Back to Home</button>
    </div>
  );
};

export default MountFuji;