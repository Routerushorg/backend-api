const { signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword } = require('firebase/auth');
const { firebaseAuth } = require('../config/firebase');

const routes = [
  {
    method: 'GET',
    path: '/',
    handler: (request, h) => {
      return { message: 'Welcome to the Route Rush API!' };
    },
  },
  {
    method: 'POST',
    path: '/register',
    handler: async (request, h) => {
      const { email, password } = request.payload;

      try {
        const userCredential = await createUserWithEmailAndPassword(firebaseAuth, email, password);
        const user = userCredential.user;

        return h
          .response({
            message: 'Registration successful',
            user: {
              uid: user.uid,
              email: user.email,
            },
          })
          .code(200);
      } catch (error) {
        return h
          .response({
            message: 'Registration failed',
            error: error.message,
          })
          .code(400);
      }
    },
  },
  {
    method: 'POST',
    path: '/signin',
    handler: async (request, h) => {
      const { email, password } = request.payload;

      try {
        const userCredential = await signInWithEmailAndPassword(firebaseAuth, email, password);
        const user = userCredential.user;

        return h
          .response({
            message: 'Signin successful',
            user: {
              uid: user.uid,
              email: user.email,
            },
          })
          .code(200);
      } catch (error) {
        return h
          .response({
            message: 'Signin failed',
            error: error.message,
          })
          .code(400);
      }
    },
  },
  {
    method: 'POST',
    path: '/signout',
    handler: async (request, h) => {
      try {
        await signOut(firebaseAuth);
        return h
          .response({
            message: 'Sign out successful',
          })
          .code(200);
      } catch (error) {
        return h
          .response({
            message: 'Sign out failed',
            error: error.message,
          })
          .code(400);
      }
    },
  },
];

module.exports = routes;
