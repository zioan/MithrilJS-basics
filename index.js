import { UsersComponent } from './users.js';
import { PostsComponent } from './posts.js';
import { UserComponent } from './user.js';

function AppComponent() {
  const model = {
    posts: [],
    url: 'https://jsonplaceholder.typicode.com',
    user: null,
    users: [],
  };

  const fetchUsers = () => {
    m.request({
      method: 'GET',
      url: `${model.url}/users`,
    }).then((users) => {
      model.users = users;
      m.redraw();
    });
  };

  const fetchPosts = () => {
    m.request({
      method: 'GET',
      url: `${model.url}/posts`,
    })
      .then((posts) => {
        model.posts = posts.slice(0, 10);
        m.redraw();
      })
      .then(console.log(model.posts));
  };

  const onUserClick = (user) => {
    console.log(user);
    model.user = user;
  };

  return {
    oninit: () => {
      fetchUsers();
      fetchPosts();
    },
    view: () => {
      const { users, user, posts } = model;
      return m('.app', [
        m(UsersComponent, { users: model.users, onUserClick }),
        m(UserComponent, { user }),
        m(PostsComponent, { posts }),
        // <PostsComponent posts={model.posts} /> in React
      ]);
    },
  };
}

m.mount(document.body, AppComponent);
