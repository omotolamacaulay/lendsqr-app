import React from "react";
import { Link } from 'react-router-dom';
import '../styles/sidenav.scss'

const Sidenav = () => {
    return (
        // <nav id="navBar" classNameName="MasterLayout__navbar">
        //     <div classNameName="MasterLayout__navbar-container" id="navbar-container">
        //         <span classNameName="MasterLayout__navbar-brand logo-bg">
        //             <Link to="/"><img src="/image/top-nexus-logo.png" alt="Lendsqr" classNameName="MasterLayout__logo" /></Link>
        //         </span>
        //         <ul classNameName="MasterLayout__menu">

        //             {/* <li classNameName="MasterLayout__item {{isActiveRoute regex='myProfile'}}">
        //                 <div classNameName="active {{#if isActiveRoute 'myProfile'}} span {{/if}}"></div>
        //                 <Link to="/profiles/{{currentUserProfile._id}}" classNameName="{{isActiveRoute 'myProfile'}} MasterLayout__link" >

        //                     <img src="" alt="avatar" classNameName="MasterLayout--avatar" />

        //                     <img src="/image/profile-pic.png" alt="avatar" classNameName="MasterLayout--avatar" />

        //                     <div classNameName="MasterLayout-myProfile">
        //                         <span classNameName="link-js"></span>
        //                         <span classNameName="MasterLayout-role"></span>
        //                     </div>
        //                 </Link>
        //             </li> */}
        //             <li classNameName="MasterLayout__item ">
        //                 <Link to="/questionnaires" classNameName=" MasterLayout__link" >
        //                     <span classNameName="link-js">Switch Organization</span>
        //                 </Link>
        //             </li>
        //             <li classNameName="MasterLayout__item">
        //                 <div classNameName="active"></div>
        //                 <Link to="/" classNameName="MasterLayout__link">
        //                     <span classNameName="link-js">Dashboard</span>
        //                 </Link>
        //             </li>
        //             <li classNameName="MasterLayout__item">
        //                 <Link to="/companies" classNameName="MasterLayout__link">
        //                     <span classNameName="link-js">Organizations</span>
        //                 </Link>
        //             </li>
        //             <li classNameName="MasterLayout__item">
        //                 <Link to="{{profileRoute}}" classNameName="MasterLayout__link">
        //                     <span classNameName="link-js">Users </span>
        //                 </Link>
        //             </li>
        //             <li classNameName="MasterLayout__item">
        //                 <Link to="/questionnaires" classNameName="MasterLayout__link" >
        //                     <span classNameName="link-js">Guarantors</span>
        //                 </Link>
        //             </li>
        //             <li classNameName="MasterLayout__item">
        //                 <Link to="/events" classNameName="MasterLayout__link">
        //                     <span classNameName="link-js">Loans</span>
        //                 </Link>
        //             </li>
        //             <li classNameName="MasterLayout__item">
        //                 <Link to="/admin/auth-tokens" classNameName="MasterLayout__link">

        //                     <span classNameName="link-js">Decision Models</span>
        //                 </Link>
        //             </li>
        //             <li classNameName="MasterLayout__item">
        //                 <Link to="{{roleRoute}}/companies/{{currentUserProfile.company._id}}" classNameName="MasterLayout__link">
        //                     <span classNameName="link-js">Savings</span>
        //                 </Link>
        //             </li>
        //             <li classNameName="MasterLayout__item">
        //                 <Link to="{{roleRoute}}/companies/{{currentUserProfile.company._id}}" classNameName="MasterLayout__link">
        //                     <span classNameName="link-js">Loan Requests</span>
        //                 </Link>
        //             </li>
        //             <li classNameName="MasterLayout__item">
        //                 <Link to="{{roleRoute}}/companies/{{currentUserProfile.company._id}}" classNameName="MasterLayout__link">
        //                     <span classNameName="link-js">Whitelist</span>
        //                 </Link>
        //             </li>
        //             <li classNameName="MasterLayout__item">
        //                 <Link to="{{roleRoute}}/companies/{{currentUserProfile.company._id}}" classNameName="MasterLayout__link">
        //                     <span classNameName="link-js">Karma</span>
        //                 </Link>
        //             </li>
        //             <li classNameName="MasterLayout__item">
        //                 <Link to="{{roleRoute}}/companies/{{currentUserProfile.company._id}}" classNameName="MasterLayout__link">
        //                     <span classNameName="link-js">Organization</span>
        //                 </Link>
        //             </li>
        //             <li classNameName="MasterLayout__item">
        //                 <Link to="{{roleRoute}}/companies/{{currentUserProfile.company._id}}" classNameName="MasterLayout__link">
        //                     <span classNameName="link-js">Loan Products</span>
        //                 </Link>
        //             </li>
        //             <li classNameName="MasterLayout__item">
        //                 <Link to="{{roleRoute}}/companies/{{currentUserProfile.company._id}}" classNameName="MasterLayout__link">
        //                     <span classNameName="link-js">Savings Products</span>
        //                 </Link>
        //             </li>
        //             <li classNameName="MasterLayout__item">
        //                 <Link to="{{roleRoute}}/companies/{{currentUserProfile.company._id}}" classNameName="MasterLayout__link">
        //                     <span classNameName="link-js">Fees and Charges</span>
        //                 </Link>
        //             </li>
        //             <li classNameName="MasterLayout__item">
        //                 <Link to="{{roleRoute}}/companies/{{currentUserProfile.company._id}}" classNameName="MasterLayout__link">
        //                     <span classNameName="link-js">Transactions</span>
        //                 </Link>
        //             </li>
        //             <li classNameName="MasterLayout__item">
        //                 <Link to="{{roleRoute}}/companies/{{currentUserProfile.company._id}}" classNameName="MasterLayout__link">
        //                     <span classNameName="link-js">Services</span>
        //                 </Link>
        //             </li>
        //             <li classNameName="MasterLayout__item">
        //                 <Link to="{{roleRoute}}/companies/{{currentUserProfile.company._id}}" classNameName="MasterLayout__link">
        //                     <span classNameName="link-js">Service Account</span>
        //                 </Link>
        //             </li>
        //             <li classNameName="MasterLayout__item">
        //                 <Link to="{{roleRoute}}/companies/{{currentUserProfile.company._id}}" classNameName="MasterLayout__link">
        //                     <span classNameName="link-js">Settlements</span>
        //                 </Link>
        //             </li>
        //             <li classNameName="MasterLayout__item">
        //                 <Link to="{{roleRoute}}/companies/{{currentUserProfile.company._id}}" classNameName="MasterLayout__link">
        //                     <span classNameName="link-js">Reports</span>
        //                 </Link>
        //             </li>
        //             <li classNameName="MasterLayout__item">
        //                 <Link to="{{roleRoute}}/companies/{{currentUserProfile.company._id}}" classNameName="MasterLayout__link">
        //                     <span classNameName="link-js">Preferences</span>
        //                 </Link>
        //             </li>
        //             <li classNameName="MasterLayout__item">
        //                 <Link to="{{roleRoute}}/companies/{{currentUserProfile.company._id}}" classNameName="MasterLayout__link">
        //                     <span classNameName="link-js">Fees and Pricing</span>
        //                 </Link>
        //             </li>
        //             <li classNameName="MasterLayout__item">
        //                 <Link to="{{roleRoute}}/companies/{{currentUserProfile.company._id}}" classNameName="MasterLayout__link">
        //                     <span classNameName="link-js">Audit Logs</span>
        //                 </Link>
        //             </li>
        //         </ul>
        //     </div >
        // </nav >
        <nav className="sidebar">
            <span className="MasterLayout__navbar-brand logo-bg">
                <Link to="/"><img src="" alt="Lendsqr" className="MasterLayout__logo" /></Link>
            </span>
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
            <li><Link to="#" id="logout-button" className="sidebar__link"> Log Out</Link>
            </li>
          </ul>
          <p>v1.2.0</p>
        </div>
            </div>
        </nav>
    )
}

export default Sidenav;