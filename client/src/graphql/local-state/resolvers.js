const updateLoggedInStatus = (_, { isLoggedIn }, { cache }) => {
  if (!isLoggedIn) {
    localStorage.removeItem("authToken");
  }
  cache.writeData({
    data: {
      isLoggedIn: {
        __typename: "isLoggedIn",
        login: isLoggedIn
      }
    }
  });
  return null;
};

export const resolvers = {
  Mutation: {
    updateLoggedInStatus
  }
};
