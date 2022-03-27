import { ModifyButton } from '@/pages';
import store from '@/redux/store';
import { cleanup, render, screen, fireEvent, waitFor } from '@testing-library/react/pure';
import { Provider } from 'react-redux';

jest.mock('axios');

describe('ModifyButton', () => {
  afterEach(jest.clearAllMocks);
  afterEach(cleanup);

  it('renders ModifyButton component', async () => {
    const component = render(
      <Provider store={store}>
        <ModifyButton />
      </Provider>
    );
    expect(component).toBeTruthy;
  });

  it('has to modify the user state on modify button click', async () => {
    render(
      <Provider store={store}>
        <ModifyButton />
      </Provider>
    );
    const button = screen.getByRole('button', { name: 'Modify User' });
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    await waitFor(() => {
      expect(store.getState().user).toEqual({ name: 'Carlos', gender: '', status: '' });
    });
  });
});
