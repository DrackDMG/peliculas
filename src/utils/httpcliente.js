const API = "https://api.themoviedb.org/3";

export function get(path) {
    return fetch(API + path, {
        headers: {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOGJhMmIxY2M0MjJmNDlmODA4NjdiYWUxNWU1NDk0MCIsInN1YiI6IjYyYzg4NDE1OTU2NjU4MDBmYzE4MmI3YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pPSeuPEfZkwOtETpPYlUYWFj7iMFypbhO6_3IoAAoK8",
            "Content-Type": "application/json;charset=utf-8",
        },
    }).then((result) => result.json())
}