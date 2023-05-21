import React, { useReducer, useEffect } from 'react';
import { User, UserAction, UserDetail } from '../types';

interface UsersState {
  users: User[]
  user: UserDetail
}

export function useUsersReducer(): [UsersState, React.Dispatch<UserAction>] {
  const userReducer = (state: UsersState, action: UserAction): UsersState => {
    switch (action.type) {
      case 'FETCH__USERS':
        localStorage.setItem('users', JSON.stringify(action.payload.data))
        return { ...state, users: action.payload.data };

      case 'FETCH__USERDETAIL':
        // localStorage.setItem('users', JSON.stringify(action.payload.data))
        return { ...state, user: action.payload.data };
      default:
        return state
    }
  };


  const [state, dispatch] = useReducer(userReducer, {
    users: [],
    user: { id: '', orgName: '', userName: '', email: '', phoneNumber: '', createdAt: '', accountBalance: '', accountNumber: '', profile: {}, guarantor: {}, education: {}, socials: {}, loanRepayment: '' }
  });





  useEffect(() => {
    const getUsers = async () => {
      const res = await fetch('https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users');
      const data = await res.json();
      dispatch({
        type: "FETCH__USERS",
        payload: { data }
      })
    }
    getUsers()
  }, []);

  return [state, dispatch];
}