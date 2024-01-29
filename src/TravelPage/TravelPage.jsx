import { useNavigate } from 'react-router-dom';

export const TravelPage = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  return <button onClick={handleGoBack}>Back</button>;

  
};
