import React from "react";
import { Link } from 'react-router-dom';
import '../styles/sidenav.scss'

const Sidenav = () => {
    return (
        <nav className="sidebar">
            {/* <span className="MasterLayout__navbar-brand logo-bg">
                <Link to="/"><img src="" alt="Lendsqr" className="MasterLayout__logo" /></Link>
            </span> */}
            <div className="sidebar__menu">
                <h4>Switch Organization</h4>
                <div>
                    <ul className="sidebar__list">
                        <li>
                            <Link to="{{roleRoute}}/municipalities"
                                className="sidebar__link">
                                Dashboard
                            </Link>
                        </li>
                        <p>CUSTOMERS</p>
                        <li>
                            <Link to="{{profileRoute}}"
                                className="sidebar__link">
                                Users
                            </Link>
                        </li>
                        <li>
                            <Link to="{{profileRoute}}"
                                className="sidebar__link">
                                Guarantors
                            </Link>
                        </li>

                        <li>
                            <Link to="/grants" className="sidebar__link">

                                Loans
                            </Link>
                        </li>

                        <li>
                            <Link to="/recipients"
                                className="sidebar__link">

                                Decision Models
                            </Link>
                        </li>

                        <li>
                            <Link to="/grants" className="sidebar__link">


                                Savings
                            </Link>
                        </li>

                        <li>
                            <Link to="/recipients"
                                className="sidebar__link">
                                Loan Requests
                            </Link>
                        </li>
                        <li>
                            <Link to="/recipients"
                                className="sidebar__link">
                                Whitelist
                            </Link>
                        </li>
                        <li>
                            <Link to="/recipients"
                                className="sidebar__link">
                                Karma
                            </Link>
                        </li>

                    </ul>

                    <div>
                        <p>businesses</p>
                        <ul className="sidebar__list">

                            <li>
                                <Link to="/reminders" className="sidebar__link">
                                    Organization
                                </Link>
                            </li>
                            <li>
                                <Link to="/reminders" className="sidebar__link">
                                    Loan Products
                                </Link>
                            </li>
                            <li>
                                <Link to="/reminders" className="sidebar__link">
                                    Savings Products
                                </Link>
                            </li>
                            <li>
                                <Link to="/reminders" className="sidebar__link">
                                    Fees and Charges
                                </Link>
                            </li>
                            <li>
                                <Link to="/reminders" className="sidebar__link">
                                    Transactions
                                </Link>
                            </li>
                            <li>
                                <Link to="/reminders" className="sidebar__link">
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link to="/reminders" className="sidebar__link">
                                    Service Account
                                </Link>
                            </li>
                            <li>
                                <Link to="/reminders" className="sidebar__link">
                                    Settlements
                                </Link>
                            </li>
                            <li>
                                <Link to="/reminders" className="sidebar__link">
                                    Reports
                                </Link>
                            </li>
                            {/* 
  
                <div className="m-x-20 sidebar__hr"></div> */}
                        </ul>
                    </div>
                    <div>
                        <p>Settings</p>
                        <ul className="sidebar__list">

                            <li>
                                <Link to="/reminders" className="sidebar__link">
                                Preferences
                                </Link>
                            </li>
                            <li>
                                <Link to="/reminders" className="sidebar__link">
                                Fees and Pricing
                                </Link>
                            </li>
                            <li>
                                <Link to="/reminders" className="sidebar__link">
                                Audit Logs
                                </Link>
                            </li>
                            <li>
                                <Link to="/reminders" className="sidebar__link">
                                Systems Messages
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
          <div className="sidebar__hr"></div>

          <ul className="sidebar__list">
            <li><Link to="/login" id="logout-button" className="sidebar__link"> Log Out</Link>
            </li>
          </ul>
          <p>v1.2.0</p>
        </div>
            </div>
        </nav>
    )
}

export default Sidenav;