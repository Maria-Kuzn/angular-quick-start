export interface User {
    "email": string,
    "password": string
}

export interface UserInfo extends User {
    "id": number,
    "fakeToken": string,
    "firstName": string,
    "lastName": string,
}