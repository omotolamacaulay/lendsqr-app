import { User } from "../../types";
// import { useUsers } from "../UserProvider";
import { Link } from "react-router-dom";
import '../styles/users.scss'

interface UserTileProps {
    user: User,
}

export const UserTile = ({ user }: UserTileProps) => {
    const truncateString = (str: String, len: Number) => {
        return str?.length > len ? str.substr(0, Math.max(Number(len) - 3, 0)) + '...' : str;
    }
    return (
        <div className="table-body">
            <div className="body-group-1">
                <div>{truncateString(user.orgName, 20)}</div>
                <div><Link to={`/users/${user.id}`}>{truncateString(user.userName, 20)}</Link></div>
                <div>{truncateString(user.email, 20)}</div>
                <div>{user.phoneNumber.split(' x')[0]}</div>
                <div>{user.createdAt.substring(0, 10)}</div>

            </div>
            <div className="body-group-2">
                <div className="inactive">Status</div>
                <div>ham</div>
            </div>
        </div>
    )
}