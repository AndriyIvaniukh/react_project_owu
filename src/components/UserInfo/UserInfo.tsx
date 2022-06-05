import React, {FC} from 'react';

import userLogo from '../../images/userLogo/userLogo.png'
import css from './userInfo.module.css';

const UserInfo : FC= () => {

    const userName : string = 'DefaultUser';

    return (
        <div className={css.userInfo} >
            <img src={userLogo} alt={'userLogo'}/>
            <div>{userName}</div>
        </div>
    );
};

export {UserInfo};