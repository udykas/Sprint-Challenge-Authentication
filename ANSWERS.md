1.  Describe Middleware, Sessions (as we know them in express), bcrypt and JWT.

Middleware is code that's used to perform specific functions and be passed in to a function, like the sessionOptions middleware we used earlier in the week:

```const sessionOptions = {
  secret: 'nobody tosses a dwarf!',
  cookie: {
    maxAge: 1000 * 60 * 60, // an hour
  },
  httpOnly: true,
  secure: false,
  resave: true,
  saveUninitialized: false,
  name: 'noname',
};
```

Express Sessions are used to persist data across multiple requests made by the user, which is usually stored in cookies. Each user has a unique session.

bcrypt is a yarn/npm dependency used to encrypt user passwords. We used it to hash passwords and to compare a given password with passwords in our database for log in functionality.

JWT is a jsonwebtoken. JWT is used to generate tokens for logged in users, which can allow them access to restricted parts of the website, like the list of users we had in yesterdays project.

2.  What does bcrypt do in order to prevent attacks?

bcrypt creates a long, hashed string from your password and a "secret" which is a string used to create the passwords. If you don't have the secret, you won't be able to reverse engineer the passwords.

3.  What are the three parts of the JSON Web Token?

The header, the payload and the signature.
