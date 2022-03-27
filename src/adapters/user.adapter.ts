export const createUserAdapter = (user: any) => ({
  name: user.data.name,
  gender: user.data.gender,
  status: user.data.status
});
