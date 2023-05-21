import React, { useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import '../styles/userdetail.scss'
import { useUsers } from '../UserProvider'
import { UserDetail, UserDetail as UserProps } from "../../types"
import { BackArrow } from "../../assets/"

const UserDetails = () => {
    const { id } = useParams();
    const { usersDispatch, user } = useUsers()
    useEffect(() => {
        const users = localStorage.getItem('users') as string;
        let data: UserDetail;
        if (users) {
            data = JSON.parse(users).find((user: UserProps) => user.id === id)
            usersDispatch({
                type: "FETCH__USERDETAIL",
                payload: {data} 
            })
        } else {
            const getSingleUser = async () => {
                const res = await fetch(`https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${id}`);
                data = await res.json();
                usersDispatch({
                    type: "FETCH__USERDETAIL",
                    payload: {data} 
                })
            }
            getSingleUser()
        }

    }, [usersDispatch, id]);
    const truncateString = (str: String, len: Number) => {
        return str?.length > len ? str.substr(0, Math.max(Number(len) - 3, 0)) + '...' : str;
    }
    return (
        <div className="userDetail">
            <section className="top-area">
                <Link to="/" className="back-button"><img src={BackArrow()} alt="" />Back to Users</Link>
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
                    <img src={user.profile.avatar} alt="" />
                    <div className="userDetail-menu__nameArea">
                        <h2>{user.profile.firstName}</h2>
                        <h6>{user.accountNumber}</h6>
                    </div>
                    <div className="userDetail-menu__ratings">
                        <p>User’s Tier</p>
                    </div>
                    <div className="userDetail-menu__bank">
                        <h2>{user.accountNumber}</h2>
                        <span>{user.profile.currency}{user.accountBalance}/Providus Bank</span>
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
                            <p>{user.profile.firstName} {user.profile.lastName}</p>
                        </div>
                        <div>
                            <h6>Phone Number</h6>
                            <p>{user.profile.phoneNumber}</p>
                        </div>
                        <div>
                            <h6>Email Address</h6>
                            <p>{truncateString(user.email, 20)}</p>
                        </div>
                        <div>
                            <h6>Bvn</h6>
                            <p>{user.profile.bvn}</p>
                        </div>
                        <div>
                            <h6>Gender</h6>
                            <p>{user.profile.gender}</p>
                        </div>
                        <div>
                            <h6>Marital status</h6>
                            <p>{user.profile.maritalStatus ? user.profile.maritalStatus : 'Not Provided'}</p>
                        </div>
                        <div>
                            <h6>Children</h6>
                            <p>{user.profile.children ? user.profile.children : 'Not Provided'}</p>
                        </div>
                        <div>
                            <h6>Type of residence</h6>
                            <p>{user.profile.residence ? user.profile.residence : 'Not Provided'}</p>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="education">
                    <h3>Education and Employment</h3>
                    <div className="education__content">
                        <div>
                            <h6>level of education</h6>
                            <p>{user.education.level}</p>
                        </div>
                        <div>
                            <h6>employment status</h6>
                            <p>{user.education.employmentStatus}</p>
                        </div>
                        <div>
                            <h6>sector of employment</h6>
                            <p>{user.education.sector}</p>
                        </div>
                        <div>
                            <h6>Duration of employment</h6>
                            <p>{user.education.duration}</p>
                        </div>
                        <div>
                            <h6>office email</h6>
                            <p>{truncateString(user.education.officeEmail, 20)}</p>
                        </div>
                        <div>
                            <h6>Monthly income</h6>
                            <p>{user.education.monthlyIncome}</p>
                        </div>
                        <div>
                            <h6>loan repayment</h6>
                            <p>{user.education.loanRepayment}</p>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="socials">
                    <h3>Socials</h3>
                    <div className="socials__content">
                        <div>
                            <h6>Twitter</h6>
                            <p>{user.socials.twitter}</p>
                        </div>
                        <div>
                            <h6>Facebook</h6>
                            <p>{user.socials.facebook}</p>
                        </div>
                        <div>
                            <h6>Instagram</h6>
                            <p>{user.socials.instagram}</p>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="guarantor">
                    <h3>Guarantor</h3>
                    <div className="guarantor__content">
                        <div>
                            <h6>full Name</h6>
                            <p>{user.guarantor.firstName} {user.guarantor.lastName}</p>
                        </div>
                        <div>
                            <h6>Phone Number</h6>
                            <p>{user.guarantor.phoneNumber}</p>
                        </div>
                        <div>
                            <h6>Email Address</h6>
                            <p>{user.guarantor.email ? user.guarantor.email : 'Not Provided'}</p>
                        </div>
                        <div>
                            <h6>Relationship</h6>
                            <p>{user.guarantor.relationship ? user.guarantor.relationship : 'Not Provided'}</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default UserDetails;