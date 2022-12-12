# `Instagram Clone`

## Technologies

- Flask
- React
- Redux
- Node

## Quick Links

- [Database Schema](https://github.com/karenhuang925/Instagram-Candid/wiki/Schema)
- [API Documentation](https://github.com/karenhuang925/Instagram-Candid/wiki/API-docs)
- [Feature List](https://github.com/karenhuang925/Instagram-Candid/wiki/Feature-List)
- [Live Site](https://candid-372h.onrender.com/)

## About

Our team created a web application inspired by Instagram. The landing page is a login/signup page with animation. It provides a demo user login. After signing in, the user sees a feed of posts from followed users. One can click into posts, like them, comment on them, and reply to comments. On the right, one views suggestions of users to follow, and on the left, a navbar persists throughout navigation of the website. The navbar links to a modal to create posts, the profile page and back to the home feed. One can follow other users under the follow suggestions on the home feed or from the individual profile pages. Full CRUD operations include posts and comments and partial CRUD operations for likes, following and replies. 

## Log in/Sign up Animation

https://user-images.githubusercontent.com/76859444/206947393-1cf0bcbd-5dbc-484a-bec5-f3217f268d74.mov

## Feed Screenshot

<img width="1792" alt="Screen Shot 2022-12-11 at 7 58 23 PM" src="https://user-images.githubusercontent.com/76859444/206946441-0690b29e-f877-4ebf-9786-2f162051ccbd.png">

## Post Detail Screenshot

<img width="1792" alt="Screen Shot 2022-12-11 at 8 31 53 PM" src="https://user-images.githubusercontent.com/76859444/206948439-1632a351-2c7e-4efe-a969-3aaf2c4cf4de.png">

## Profile Screenshot

<img width="1792" alt="Screen Shot 2022-12-11 at 8 34 22 PM" src="https://user-images.githubusercontent.com/76859444/206948660-c7e2e36c-1255-44a1-86a4-3d9d85fbe8ce.png">

## Setup

1. Clone the repository
2. In the root folder, create a .env file as below:

```
SECRET_KEY=«generate_strong_secret_here»
DATABASE_URL=sqlite:///dev.db
```

2. Run "pipenv install --dev -r dev-requirements.txt && pipenv install -r requirements.txt" in the app folder
3. Run "pipenv shell" in the app folder
4. Run "flask db upgrade" in the app folder
5. Run "flask db seed all" in the app folder
6. Run "flask run" in the app folder
7. Run "npm install" in the react-app folder
8. Run "npm start" in the react-app folder

## Future Features

- [ ] Search
- [ ] Messaging
- [ ] Reply CRUD operations
- [ ] Like comments
- [ ] Like replies


