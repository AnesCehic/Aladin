export const checkLoggedUser = () => {
  const item = localStorage.getItem("token");
  if(item) {
    return true;
  }

  return false;
}