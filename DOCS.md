# Learnings
1. At first, User and Post list are setup with authentication using User on the panel.
    - When page is loaded first time, first user is asked to be created
    - Using this user, we can login and create other users and posts
    - All users are treated as admin and can do everything on the panel (CRUD on User and Panel list)

1. Using Postgresql database with keystonejs
    - DB_URI used in .env to configure with a fallback value mentioned in keystone.ts file