import { EndpointUser, User } from '@/models';

export const createAddaptedUser = (user: EndpointUser) => {
  const formattedUser: User = {
    name: user.name,
    lastName: user.last_name
  };

  return formattedUser;
};
