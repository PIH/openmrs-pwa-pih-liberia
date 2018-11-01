This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Development Enviroment Setup

##

1. Clone this repo locally
2. npm install
3. Clone the https://github.com/openmrs/openmrs-react-components locally as well
4. npm install
5. Link to use your local version of openmrs-react-components:
    * In your openmrs-react-components directory: npm link
    * In the top level directory of this project: npm link @openmrs/react-components
6. To avoid an error with a duplicate version of React, link React @openmrs/react-components *back* to the React in this project:
    * cd path-to-your-local-openmrs-react-components
    * npm link path-to-your-local-pih-liberia-project/node_modules/react
    Reference: https://stackoverflow.com/questions/33157904/how-to-avoid-loaded-two-copies-of-react-error-when-developing-an-external-comp
7. In your openmrs-react-components directory build and watch the code: npm run build:watch
8. In the directory where you have this project checked out: npm start

## Setting the URL of OpenMRS server

When developing, you can customize which server the app connects to:

Create a file ".env.local" at the root level of this repo which sets two environmental variables setting the server address and context path.  For instance:

```
REACT_APP_SERVER_ADDRESS=http://localhost:8080/
REACT_APP_SERVER_CONTEXT_PATH=openmrs
```

## Debugging on a tablet

Need to set Android to remote debugging using the "magic" steps here:

https://developers.google.com/web/tools/chrome-devtools/remote-debugging/?utm_source=dcc&utm_medium=redirect&utm_campaign=2016q3


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
