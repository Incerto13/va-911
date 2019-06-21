## Install Application

Clone project

#### `git clone ghttps://github.com/Incerto13/va-911.git`

Note: Requires Node and npm

Install dependencies

#### `npm install`

## Loading the Incident File

(1) Rename the incident file `raw_incident.json`
(2) Place the incident file in the project directory in the `/tools/upload/` directory

## Run Application

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

Note: runs the mock api on (http://localhost:3001)

## Did you complete the project?

I completed everthing other than the `ArcGIS Server REST API` `query`. This Api was very poorly documented and after several hours I decided to move on and ignore the `parcel` portion of the assignment. Nevertheless, to display my backend capabilities I decided to create a mock api for the incident data (I realize this wasn't necessary and easily could have just read the file contents via node as I did in the `sanitizeData.js` file) just to display my capabilties in this realm.

Also my weather data is current and not historical as of the time of the incident. I was not able to find a free api that had historical data that went further back than just a few days at the most.

## How much time did you spend on the project?

I spent a total of 18 hours on this over the past few days. Trying to get the ArcGIS Server to work took almost 7 of those hours. Wrangling with the Google Maps Rect Api also took a considerable amount of time (I had never used it before) but ultimately I found mapbox much more straighforward and switched to that.

## Demo

![](va-911-demo.gif)
