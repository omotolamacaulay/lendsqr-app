import React from 'react';
import { User } from "../../types";
import '../styles/users.scss';
import type { MenuProps } from 'antd';
import { Button, Dropdown } from 'antd';
import { Link } from 'react-router-dom';
import { Hamburger, ViewDetails, BlacklistUser, ActivateUser } from '../../assets';

interface UserIdProps {
  user: User,
}
const HamburgerButton = ({ user }: UserIdProps) => {
  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <Link rel="noopener noreferrer" to={`/users/${user.id}`}>
          <img src={ViewDetails()} alt="" /> View Details
        </Link>
      ),
    },
    {
      key: '2',
      label: (
        <Link rel="noopener noreferrer" to="">
          <img src={BlacklistUser()} alt="" /> Blacklist User
        </Link>
      ),
    },
    {
      key: '3',
      label: (
        <Link rel="noopener noreferrer" to="">
          <img src={ActivateUser()} alt="" /> Activate User
        </Link>
      ),
    },
  ];
  return (
    <>
      <Dropdown menu={{ items }} placement="bottom" className='dropdown-body'>
        <Button className='li'><img src={Hamburger()} alt="" /> </Button>
      </Dropdown>
    </>
  )
};

export default HamburgerButton;