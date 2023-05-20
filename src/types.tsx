export interface User {
    id: string,
    orgName: string,
    userName: string,
    email: string,
    phoneNumber: string,
    createdAt: string
}

export interface UserFetchAction {
    type: 'FETCH',
    payload: {
        data: User[]
    }
}

export type UserAction =
    | UserFetchAction
