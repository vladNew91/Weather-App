# Simple Weather App

# [Demo](https://weather-app-c1390d.netlify.app/)

This is Simple Weather App with two pages.

Home page:

1. shows the weather for the next 3 days in Minsk (by default),
2. there are 3 buttons on the page, the cities are switched (Minsk, Moscow, Bratislava)
   with the subsequent updating of the page,
3. selected city stay saved after reloading the page.

Second page:

1. displays hourly weather forecast for the specified city,
2. on initialization the page takes the city from the URL
   (the path could be, for example: {...} / in / Milan),
3. there is a text box with change city.

## List of technologies

1. React baced on [Create React App](https://github.com/facebook/create-react-app), functional components
2. React-Redux
3. Redux-Saga
4. TypeScript

### Available Scripts

In the project directory, you can run:

`yarn start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

`yarn build`
Builds the app for production to the `build` folder.

## Learn More

[React documentation](https://reactjs.org/)\
[React-Redux documentation](https://react-redux.js.org/)\
[React-Saga documentation](https://redux-saga.js.org/)\
[TypeScript documentation](https://www.typescriptlang.org/docs/)
