import {baseAPI, client_id, client_secret, oauthURL} from '../env';

export async function getTopicsList(){
	return await fetch(`${baseAPI}/topics`,{
		headers:{
			'ngrok-skip-browser-warning':'true'
		}
	})
		.then((data) => data.json());
}

export async function getTopicPhotos(topic){
	return await fetch(`${baseAPI}/topics/${topic}/photos/?client_id=${client_id}`,{
		headers:{
			'ngrok-skip-browser-warning':'true'
		}
	})
		.then((data) => data.json());
}


export async function getCollections() {
	return await fetch(`${baseAPI}/collections/?client_id=${client_id}`)
		.then((data) => data.json());
};

export async function getCollectionPhotos(id) {
	return await fetch(`${baseAPI}/collections/${id}/photos?client_id=${client_id}`)
		.then((data) => data.json());
};

export async function getDetailCollection(id) {
	return await fetch(`${baseAPI}/collections/${id}?client_id=${client_id}`)
		.then((data) => data.json());
};
