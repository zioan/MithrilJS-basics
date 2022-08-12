export const UsersComponent = () => {
  return {
    view: ({ attrs }) => {
      // const users = attrs.users ? attrs.users : []
      const users = attrs.users || [];
      return m(
        '.users',
        users.map((user) => {
          return m(
            'p',
            { onclick: () => attrs.onUserClick(user), class: 'user-btn' },
            user.name
          );
        })
      );
    },
  };
};
