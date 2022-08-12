export const PostsComponent = () => {
  return {
    // view: (vnode) => {
    //   console.log(vnode);
    view: ({ attrs }) => {
      const posts = attrs.posts || [];
      return m('div', { class: 'change-background' }, [
        m('h1', { class: 'underline' }, 'Posts'),
        posts.map((post) => {
          return m(
            'div',
            m('h2', { style: { color: 'red' } }, post.title),
            m('h4', `Post ID: ${post.id}`),
            m('p', post.body)
          );
        }),
        m('hr'),
      ]);
    },
  };
};
