import React from "react";
import { UserTile } from "./UserTile";
import { useUsers } from "../UserProvider";
import '../styles/users.scss'
// import UserDetail from "./UserDetail";


const Users = () => {
    const { users } = useUsers();
    return (
        <div className="home">
            <h2>Users</h2>
            <div className="dashboard__summary">
                <article className="dashboard__summary--box">
                    <div className="dashboard__summary--box__icon">
                        {/* <img src="image/part-Dash.png" alt="" srcset=""> */}
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
                        {/* <img src="image/part-Dash.png" alt="" srcset=""> */}
                        {/* <a href=""> */}
                        <span className="dashboard__summary--topic">
                            Active Users
                        </span>
                        {/* </a> */}
                    </div>
                    <div className="dashboard__summary--box__number">
                        <span> 22</span>
                    </div>
                </article>
                <article className="dashboard__summary--box">
                    <div className="dashboard__summary--box__icon">
                        {/* <img src="image/part-Dash.png" alt="" srcset=""> */}
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
                        {/* <img src="image/part-Dash.png" alt="" srcset=""> */}
                        <span className="dashboard__summary--topic">
                            Users with Savings
                        </span>
                    </div>
                    <div className="dashboard__summary--box__number">
                        <span> 22</span>
                    </div>
                </article>
            </div>
            <div className="card-group-2">
                <div className="table-head">
                    <div className="group-1">
                        <div>organization</div>
                        <div>Username</div>
                        <div>Email</div>
                        <div>Phone number</div>
                        <div>Date joined</div>

                    </div>
                    <div className="group-2">
                        <div>Status</div>
                        <div></div>
                    </div>
                </div>
                {users.map(user => (
                    <UserTile key={user.id} user={user} />
                ))}
            </div>
        </div>
    )
}

export default Users;