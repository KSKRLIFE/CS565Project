import {baseAPI, client_id} from '../env';

export default async function getDetailPhoto(id) {
return await fetch(`${baseAPI}/photos/${id}?client_id=${client_id}`,{
    headers:{
        'ngrok-skip-browser-warning':'true'
    }
})
    .then((data) => data.json());
};