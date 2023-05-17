import React from "react"
import Sidenav from "../layout/Sidenav"
import '../styles/home.scss'

const Home = () => {
    return (
        <div className='home'>
            <div className="dashboard__summary">
            <article className="dashboard__summary--box">
                    <div className="dashboard__summary--box__icon">
                        {/* <img src="image/part-Dash.png" alt="" srcset=""> */}
                        {/* <a href=""> */}
                            <span className="dashboard__summary--topic">
                                Users
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
                        {/* <a href=""> */}
                            <span className="dashboard__summary--topic">
                                Users
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
                        {/* <a href=""> */}
                            <span className="dashboard__summary--topic">
                                Users
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
                        {/* <a href=""> */}
                            <span className="dashboard__summary--topic">
                                Users
                            </span>
                        {/* </a> */}
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
                <div className="table-body">
                    <div className="body-group-1">
                        <div>Lendsqr</div>
                        <div>Lendsqr</div>
                        <div>lendsqr@gmail.com</div>
                        <div>08023423456</div>
                        <div>Date joined</div>

                    </div>
                    <div className="body-group-2">
                        <div className="inactive">Status</div>
                        <div>ham</div>
                    </div>
                </div>
            </div>
        <Sidenav />
        </div>
    )
}

export default Home