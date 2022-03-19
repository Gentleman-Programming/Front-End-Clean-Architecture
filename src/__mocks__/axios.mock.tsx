import axios from 'axios';

export const axiosMock = axios as jest.Mocked<typeof axios>;
