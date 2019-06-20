## Install Application

Clone project

#### `git clone git@github.com:vbence86/prominent-edge-test-app.git`

Install Node and Npm if not available

#### `curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.0/install.sh | bash`

#### `nvm install node`

Install dependencies

#### `npm install`

## Run Application

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

#### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.
The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

## Did you complete the project?

I have not completed the project due to unresolved issues with `ArcGIS Server REST API` `query` service. Although I have carefully studied the API documentation and attempted to send the right coordinates with the linked spatial reference number the service kept responding with zero results. After having invested around 1-2 hours to unpuzzle what parts of my requests had been incorrect and in spite of the working examples I turned my attention away from this section and focused on the rest of the test.

## How much time did you spend on the project?

I've spent 7 hours in total. 2 hours of unpacking the problem with the `ArcGIS Server` described above, 4 hours of implementation and 1 hour of wrapping up the project.

## Demo

![ezgif com-video-to-gif 1](https://user-images.githubusercontent.com/6104164/52496275-32176a80-2bd3-11e9-80ea-799b8168c878.gif)

## Tech Stack of mychoice

- Created a very basic React application bootstrapted by `create-react-app` CLI tool.
- Reused existing React components such as `reach-google-maps`, `react-dropzone` or `react-spinners`.
- Employed `react-scripts` a collection of build tools for rapid app development with React.
- `RESTClient`, a simple implementation of a REST client though made by myself but out of the scope of this assessement.
- GitHub Pages CLI tool to deploy the application on GitHub Pages
