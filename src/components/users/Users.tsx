import React, { useState } from 'react';
import { UserTile } from "./UserTile";
import { useUsers } from "../UserProvider";
import '../styles/users.scss'
import { DashUsers, DashActiveUsers, DashUsersWithLoans, DashUsersWithSavings, Filter } from "../../assets";
import FilterUserForm from './FilterForm';


const Users = () => {
    const { users } = useUsers();
    const [collapsed, setCollapsed] = useState(false)
    return (
        <div className="home">
            <h2>Users</h2>
            <div className="dashboard__summary">
                <article className="dashboard__summary--box">
                    <div className="dashboard__summary--box__icon">
                        <img src={DashUsers()} alt="" />
                        <span className="dashboard__summary--topic">
                            Users
                        </span>
                    </div>
                    <div className="dashboard__summary--box__number">
                        <span>{users.length}</span>
                    </div>
                </article>
                <article className="dashboard__summary--box">
                    <div className="dashboard__summary--box__icon">
                        <img src={DashActiveUsers()} alt="" />
                        <span className="dashboard__summary--topic">
                            Active Users
                        </span>
                    </div>
                    <div className="dashboard__summary--box__number">
                        <span>{users.length}</span>
                    </div>
                </article>
                <article className="dashboard__summary--box">
                    <div className="dashboard__summary--box__icon">
                        <img src={DashUsersWithLoans()} alt="" />
                        <span className="dashboard__summary--topic">
                            Users with Loans
                        </span>
                    </div>
                    <div className="dashboard__summary--box__number">
                        <span>{users.length}</span>
                    </div>
                </article>
                <article className="dashboard__summary--box">
                    <div className="dashboard__summary--box__icon">
                        <img src={DashUsersWithSavings()} alt="" />
                        <span className="dashboard__summary--topic">
                            Users with Savings
                        </span>
                    </div>
                    <div className="dashboard__summary--box__number">
                        <span>{users.length}</span>
                    </div>
                </article>
            </div>
            <div className="card-group-2">
                <div className="header-body">
                    <div className="table-head">
                        <div className="group-1">
                            <div>organization <img src={Filter()} alt="Filter Organization" onClick={() => setCollapsed(!collapsed)} /></div>
                            <div>Username<img src={Filter()} alt="Filter Username" onClick={() => setCollapsed(!collapsed)} /></div>
                            <div>Email<img src={Filter()} alt="Filter Email" onClick={() => setCollapsed(!collapsed)} /></div>
                            <div>Phone number<img src={Filter()} alt="Filter Phone Number" onClick={() => setCollapsed(!collapsed)} /></div>
                            <div>Date joined<img src={Filter()} alt="Filter Date Joined" onClick={() => setCollapsed(!collapsed)} /></div>

                        </div>
                        <div className="group-2">
                            <div>Status<img src={Filter()} alt="Filter Status" /></div>
                            <div></div>
                        </div>
                    </div>
                    {users.map(user => (
                        <UserTile key={user.id} user={user} />
                    ))}

                </div>
                {/*                 
                <UserPagination total={users.length}  /> */}
                {collapsed && <FilterUserForm onSubmit={() => { }} />}


            </div>
        </div>
    )
}

export default Users;