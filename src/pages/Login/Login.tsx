import { createUserAdapter } from '@/adapters';
import { useFetchAndLoad } from '@/hooks';
import { createUser, modifyUser } from '@/redux/states/user';
import { AppStore } from '@/redux/store';
import { login } from '@/services/public.service';
import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

export const Login = () => {
  const { loading, callEndpoint } = useFetchAndLoad();
  const dispatch = useDispatch();
  const userState = useSelector((store: AppStore) => store.user);
  const handleClick = async () => {
    const morty = await callEndpoint(login());
    dispatch(createUser(createUserAdapter(morty)));
  };
  const handleModify = () => {
    dispatch(modifyUser({ name: 'Gentleman' }));
  };

  return (
    <>
      {loading ? (
        <div>
          <h3>LOADING</h3>
        </div>
      ) : (
        <>
          <Button variant="text" onClick={handleClick}>
            LOGIN
          </Button>
          <Button variant="text" onClick={handleModify}>
            MODIFY
          </Button>
          <div>
            <h3>{JSON.stringify(userState)}</h3>
          </div>
        </>
      )}
    </>
  );
};

export default Login;
