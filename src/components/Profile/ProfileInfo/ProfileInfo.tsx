import React from 'react';
import s from './ProfilInfo.module.css'

type ProfileInfoPropsType = {}

export const ProfileInfo: React.FC<ProfileInfoPropsType> = (props) => {
    const {} = props;
    return (
        <div>
            <div>
                <img
                    src="https://media.istockphoto.com/id/1331137712/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BA%D0%BE%D0%BD%D1%86%D0%B5%D0%BF%D1%86%D0%B8%D1%8F-%D0%B1%D0%B8%D0%B7%D0%BD%D0%B5%D1%81%D0%B0-%D1%82%D0%B5%D1%85%D0%BD%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D0%B9-%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%BD%D0%B5%D1%82%D0%B0-%D0%B8-%D1%81%D0%B5%D1%82%D0%B8-%D1%82%D1%80%D1%83%D0%B4%D0%BE%D0%B2%D0%BE%D0%B5-%D0%BF%D1%80%D0%B0%D0%B2%D0%BE-%D1%8E%D1%80%D0%B8%D1%81%D1%82-%D0%B0%D0%B4%D0%B2%D0%BE%D0%BA%D0%B0%D1%82-%D0%BA%D0%BE%D0%BD%D1%86%D0%B5%D0%BF%D1%86%D0%B8%D1%8F.jpg?s=612x612&w=is&k=20&c=cLrcQgYq2lApkhmNA4sKCbJ3PDQcQus9wb5_NUg87AQ="
                    alt="Image"/>
            </div>
            <div className={s.descriptionBlock}>ava + description</div>
        </div>
    );
};