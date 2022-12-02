import {baseAPI, client_id} from '../env';

export default function doSearch(query) {
  return fetch(`${baseAPI}/search/photos/?client_id=${client_id}&query=${query}`,{
    headers:{
        'ngrok-skip-browser-warning':'true'
    }
})
      .then((data) => data.json());
};