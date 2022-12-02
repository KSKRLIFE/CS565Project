import {baseAPI, client_id} from '../env';

export default async function getPhotos(page) {
  return await fetch(`${baseAPI}/photos?per_page=20&page=${page}`,{
    headers:{
        'ngrok-skip-browser-warning':'true'
    }
})
      .then((data) => data.json());
};