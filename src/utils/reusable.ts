import { PATHS } from ".";

export const logout = (navigate: (path: string) => void) => {
  const storedUserData = localStorage.getItem("userData");
  if (storedUserData) {
    localStorage.removeItem("userData");
    navigate(PATHS.login);
    return true;
  }
    return false;
};
