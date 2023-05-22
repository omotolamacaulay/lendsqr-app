import React from "react";
import { Link } from 'react-router-dom';
import '../styles/sidenav.scss'
import { 
    SwitchOrg, 
    Dashboard, 
    Users, 
    Guarantors, 
    Loans, 
    DecisionModels, 
    Savings, 
    LoanRequest, 
    Whitelist, 
    Karma, 
    Organization, 
    LoanProducts, 
    SavingProducts, 
    FeesCharges, 
    Transactions, 
    Services, 
    ServiceAccount, 
    Settlements, 
    Reports, 
    Preferences, 
    FeesAndPricing, 
    AuditLogs, 
    SystemMessages, 
    SideArrow, 
    Logout, 
    Logo 
} from "../../assets";

type ToggleClass = {
    name: string
}
const Sidenav = ({name}: ToggleClass) => {
    return (
        <nav className={name}>
            <h1 className="mobile-header">
                <Link to='/'>
                    <img src={Logo()} alt="" />lendsqr
                </Link>
            </h1>
            <div className="sidebar__menu">
                <h4><img src={SwitchOrg()} alt="" /> Switch Organization<img src={SideArrow()} className='sideArrow' alt="" /></h4>
                <div>
                    <ul className="sidebar__list">
                        <li>
                            <Link to=""
                                className="sidebar__link">
                               <img src={Dashboard()} alt="" /> Dashboard
                            </Link>
                        </li>
                        <p>CUSTOMERS</p>
                        <li>
                            <Link to="/"
                                className="sidebar__link">
                               <img src={Users()} alt="" /> Users
                            </Link>
                        </li>
                        <li>
                            <Link to=""
                                className="sidebar__link">
                               <img src={Guarantors()} alt="" /> Guarantors
                            </Link>
                        </li>

                        <li>
                            <Link to="" className="sidebar__link">
                               <img src={Loans()} alt="" /> Loans
                            </Link>
                        </li>

                        <li>
                            <Link to=""
                                className="sidebar__link">
                               <img src={DecisionModels()} alt="" /> Decision Models
                            </Link>
                        </li>

                        <li>
                            <Link to="" className="sidebar__link">
                            <img src={Savings()} alt="" />Savings
                            </Link>
                        </li>

                        <li>
                            <Link to=""
                                className="sidebar__link">
                              <img src={LoanRequest()} alt="" />Loan Requests
                            </Link>
                        </li>
                        <li>
                            <Link to=""
                                className="sidebar__link">
                                <img src={Whitelist()} alt="" />Whitelist
                            </Link>
                        </li>
                        <li>
                            <Link to=""
                                className="sidebar__link">
                                <img src={Karma()} alt="" />Karma
                            </Link>
                        </li>
                    </ul>

                    <div>
                        <p>businesses</p>
                        <ul className="sidebar__list">
                            <li>
                                <Link to="" className="sidebar__link">
                                <img src={Organization()} alt="" />Organization
                                </Link>
                            </li>
                            <li>
                                <Link to="" className="sidebar__link">
                                <img src={LoanProducts()} alt="" />Loan Products
                                </Link>
                            </li>
                            <li>
                                <Link to="" className="sidebar__link">
                                <img src={SavingProducts()} alt="" />Savings Products
                                </Link>
                            </li>
                            <li>
                                <Link to="" className="sidebar__link">
                                <img src={FeesCharges()} alt="" />Fees and Charges
                                </Link>
                            </li>
                            <li>
                                <Link to="" className="sidebar__link">
                                <img src={Transactions()} alt="" />Transactions
                                </Link>
                            </li>
                            <li>
                                <Link to="" className="sidebar__link">
                                <img src={Services()} alt="" />Services
                                </Link>
                            </li>
                            <li>
                                <Link to="" className="sidebar__link">
                                <img src={ServiceAccount()} alt="" />Service Account
                                </Link>
                            </li>
                            <li>
                                <Link to="" className="sidebar__link">
                                <img src={Settlements()} alt="" />Settlements
                                </Link>
                            </li>
                            <li>
                                <Link to="" className="sidebar__link">
                                <img src={Reports()} alt="" />Reports
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p>Settings</p>
                        <ul className="sidebar__list">
                            <li>
                                <Link to="" className="sidebar__link">
                                <img src={Preferences()} alt="" />Preferences
                                </Link>
                            </li>
                            <li>
                                <Link to="" className="sidebar__link">
                                <img src={FeesAndPricing()} alt="" />Fees and Pricing
                                </Link>
                            </li>
                            <li>
                                <Link to="" className="sidebar__link">
                                <img src={AuditLogs()} alt="" />Audit Logs
                                </Link>
                            </li>
                            <li>
                                <Link to="" className="sidebar__link">
                                <img src={SystemMessages()} alt="" />Systems Messages
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div className="sidebar__hr"></div>

                    <ul className="sidebar__list">
                        <li><Link to="/login" id="logout-button" className="sidebar__link"><img src={Logout()} alt="" />Log Out</Link>
                        </li>
                    </ul>
                    <p>v1.2.0</p>
                </div>
            </div>
        </nav>
    )
}

export default Sidenav;