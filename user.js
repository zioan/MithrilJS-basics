export const UserComponent = () => {
  const renderUser = (attrs) => {
    return [
      m('p', `Name: ${attrs.user.name}`),
      m('p', `Email: ${attrs.user.email}`),
    ];
  };

  return {
    view: ({ attrs }) => {
      return m('div', [
        // m('h4', attrs.user.id),
        m('h2', 'Selected User'),
        !attrs.user ? m('p', 'Please select a user') : renderUser(attrs),
      ]);
    },
  };
};
