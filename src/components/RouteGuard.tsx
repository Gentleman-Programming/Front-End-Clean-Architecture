import { AppStore } from '@/redux/store';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

export const RouteGuard = () => {
  const userState = useSelector((state: AppStore) => state.user);
  return userState.name ? <Outlet /> : <Navigate replace to={`login`} />;
};

export default RouteGuard;
