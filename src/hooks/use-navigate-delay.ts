import { useNavigate } from 'react-router-dom';

export const useNavigateWithDelay = (to: string, seconds: number) => {
  const navigate = useNavigate();
  setTimeout(() => {
    navigate(to);
  }, seconds * 1000);
};

export default useNavigateWithDelay;
