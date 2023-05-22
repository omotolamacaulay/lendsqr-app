import { User } from "../../types";
import { Link } from "react-router-dom";
import '../styles/users.scss'
import HamburgerButton from "./Hamburger";
import Tool from "./Tooltip";

interface UserTileProps {
    user: User,
}

export const UserTile = ({ user }: UserTileProps) => {

    return (
        <div className="table-body">
            <div className="body-group-1">
                <div>{Tool(user.orgName)}</div>
                <div><Link to={`/users/${user.id}`}>{Tool(user.userName)}</Link></div>
                <div>{Tool(user.email)}</div>
                <div>{user.phoneNumber.split(' x')[0]}</div>
                <div>{user.createdAt.substring(0, 10)}</div>
            </div>
            <div className="body-group-2">
                <div className="active">Active</div>
                <div className="hamburger" ><HamburgerButton user={user} /></div>
            </div>
        </div>
    )
}