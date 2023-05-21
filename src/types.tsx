export interface User {
    id: string,
    orgName: string,
    userName: string,
    email: string,
    phoneNumber: string,
    createdAt: string,
    accountNumber: string,
    accountBalance: string
}

export interface UserDetail extends User  {
    profile: {
        [key: string]: string
    },
    guarantor: {
        [key: string]: string
    },
    education: {
        [key: string]: string
    },
    socials: {
        [key: string]: string
    },
    loanRepayment: string
}

export interface UserFetchAction {
    type: 'FETCH__USERS',
    payload: {
        data: User[]
    }
}
export interface UserDetailFetchAction {
    type: 'FETCH__USERDETAIL',
    payload: {
        data: UserDetail
    }
}

export type UserAction =
    | UserFetchAction
    | UserDetailFetchAction
