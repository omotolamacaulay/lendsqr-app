import React from "react"
import { Link } from "react-router-dom"
import '../styles/userdetail.scss'

const UserDetail = () => {
    return (
        <div className="userDetail">
            <section className="top-area">
                <Link to="/" className="back-button">Back to Users</Link>
                <div className="userDetail-actions">
                    <h1>User Details</h1>
                    <div className="userDetail-cta">
                        <button className="userDetail-cta__blacklist">Blacklist User</button>
                        <button className="userDetail-cta__activate">Activate User</button>
                    </div>
                </div>
            </section>
            <section className="userDetail-menu">
                <div className="userDetail-menu__group">
                    <div className="userDetail-menu__nameArea">
                        <h2>Grace Effiom</h2>
                        <h6>LSQFf587g90</h6>
                    </div>
                    <div className="userDetail-menu__ratings">
                        <p>User’s Tier</p>
                    </div>
                    <div className="userDetail-menu__bank">
                        <h2>₦200,000.00</h2>
                        <span>9912345678/Providus Bank</span>
                    </div>
                </div>
                <div className="tabGroup">
                    <ul className="tab__ul">
                        <li className="tab__li">
                            <span id="0" className="active">
                                General Details
                            </span>
                        </li>
                        <li className="tab__li">
                            <span id="1">
                                Documents
                            </span>
                        </li>
                        <li className="tab__li">
                            <span id="2">
                                Bank Details
                            </span>
                        </li>
                        <li className="tab__li">
                            <span id="3">
                                Loans
                            </span>
                        </li>
                        <li className="tab__li">
                            <span id="4">
                                Savings
                            </span>
                        </li>
                        <li className="tab__li">
                            <span id="5">
                                App and System
                            </span>
                        </li>
                    </ul>
                </div>
            </section>
            <section className="userDetail__info">
                <div className="personal-info">
                    <h3>Personal Information</h3>
                    <div className="personal-info__content">
                        <div>
                            <h6>full Name</h6>
                            <p>Grace Effiom</p>
                        </div>
                        <div>
                            <h6>Phone Number</h6>
                            <p>07060780922</p>
                        </div>
                        <div>
                            <h6>Email Address</h6>
                            <p>grace@gmail.com</p>
                        </div>
                        <div>
                            <h6>Bvn</h6>
                            <p>07060780922</p>
                        </div>
                        <div>
                            <h6>Gender</h6>
                            <p>Female</p>
                        </div>
                        <div>
                            <h6>Marital status</h6>
                            <p>Single</p>
                        </div>
                        <div>
                            <h6>Children</h6>
                            <p>None</p>
                        </div>
                        <div>
                            <h6>Type of residence</h6>
                            <p>Parent’s Apartment</p>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="education">
                    <h3>Education and Employment</h3>
                    <div className="education__content">
                        <div>
                            <h6>level of education</h6>
                            <p>B.Sc</p>
                        </div>
                        <div>
                            <h6>employment status</h6>
                            <p>Employed</p>
                        </div>
                        <div>
                            <h6>sector of employment</h6>
                            <p>FinTech</p>
                        </div>
                        <div>
                            <h6>Duration of employment</h6>
                            <p>2 years</p>
                        </div>
                        <div>
                            <h6>office email</h6>
                            <p>grace@lendsqr.com</p>
                        </div>
                        <div>
                            <h6>Monthly income</h6>
                            <p>₦200,000.00- ₦400,000.00</p>
                        </div>
                        <div>
                            <h6>loan repayment</h6>
                            <p>40,000</p>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="socials">
                    <h3>Socials</h3>
                    <div className="socials__content">
                        <div>
                            <h6>Twitter</h6>
                            <p>@grace_effiom</p>
                        </div>
                        <div>
                            <h6>Facebook</h6>
                            <p>Grace Effiom</p>
                        </div>
                        <div>
                            <h6>Instagram</h6>
                            <p>FinTech</p>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="guarantor">
                    <h3>Guarantor</h3>
                    <div className="guarantor__content">
                        <div>
                            <h6>full Name</h6>
                            <p>Debby Ogana</p>
                        </div>
                        <div>
                            <h6>Phone Number</h6>
                            <p>07060780922</p>
                        </div>
                        <div>
                            <h6>Email Address</h6>
                            <p>debby@gmail.com</p>
                        </div>
                        <div>
                            <h6>Relationship</h6>
                            <p>Sister</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default UserDetail;