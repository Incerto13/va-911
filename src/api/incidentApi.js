import { handleResponse, handleError } from "./apiUtils";
const baseUrl = "http://localhost:3001";

/* as can be seen from the mock api landing page at localhost:2001
the following endpoints are: 'address', 'apparatus', 'description', and 'fire description'
as can be seen in the incident json file 
*/
export default function getIncident(resource) {
  return fetch(baseUrl + `/${resource}/`)
    .then(handleResponse)
    .catch(handleError);
}
