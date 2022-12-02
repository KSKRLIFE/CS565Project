import {baseAPI, client_id, client_secret, oauthURL} from '../env';

export async function getTopicsList() {
    return await fetch(`${baseAPI}/topics`, {
        headers: {
            'ngrok-skip-browser-warning': 'true'
        }
    })
        .then((data) => data.json());
}

export async function getTopicPhotos(topic, page = 1) {
    return await fetch(`${baseAPI}/topics/${topic}/photos/?page=${page}`, {
        headers: {
            'ngrok-skip-browser-warning': 'true'
        }
    })
        .then((data) => data.json());
}


export async function getCollections(page = 1) {
    return await fetch(`${baseAPI}/collections/?client_id=${client_id}&page=${page}`)
        .then((data) => data.json());
};

export async function getCollectionPhotos(id, page) {
    return await fetch(`${baseAPI}/collections/${id}/photos?client_id=${client_id}&page=${page}`)
        .then((data) => data.json());
};

export async function getDetailCollection(id) {
    return await fetch(`${baseAPI}/collections/${id}?client_id=${client_id}`)
        .then((data) => data.json());
};

export async function getUser(username) {
    return await fetch(`${baseAPI}/users/${username}/?client_id=${client_id}`)
        .then((data) => data.json());
};

export async function getUsersPhotos(username, activity) {
    return await fetch(`${baseAPI}/users/${username}/${activity}/?client_id=${client_id}`)
        .then((data) => data.json());
};


export async function getMe(token) {
    return await fetch(`${baseAPI}/me?token=${token}`)
        .then((data) => data.json());
}

export async function doLike(id) {
    let token = localStorage.getItem('token')
    return await fetch(`${baseAPI}/photos/${id}/like?token=${token}`)
        .then((data) => data.json());
}


export function getLoginURL() {
    let access = 'public+read_user+write_likes'
    let redirectURL = 'http://localhost:3000/oauth'
    let responseType = 'code'
    let url = `${oauthURL}/oauth/authorize?client_id=${client_id}&redirect_uri=${redirectURL}&response_type=${responseType}&scope=${access}`
    return url
}


export async function getOauthToken(code) {
    return await fetch(`${baseAPI}/oauth?code=${code}`)
        .then((data) => data.json());
}
