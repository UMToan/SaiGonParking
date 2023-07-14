import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faMapLocationDot } from '@fortawesome/free-solid-svg-icons';

import { formatVietnameseToString } from '../../../config/routes';
import { useEffect, useState } from 'react';
import { apiGetKhuVuc } from '../../../services/khuvuc';
import config from '../../../config';
import Menu from './Menu';
import { MenuItem } from './Menu';

const cx = classNames.bind(styles);

function Sidebar() {
    const [khuvucs, setKhuvucs] = useState([]);

    useEffect(() => {
        const fetchKhuvucs = async () => {
            const khuvuc = await apiGetKhuVuc();
            if (khuvuc?.data.err === 0) {
                setKhuvucs(khuvuc.data.khuvuc);
            }
        };
        fetchKhuvucs();
    }, []);

    return (
        <aside className={cx('wrapper')}>
            {/* to={to} nghĩa là cái to = với prop to*/}
            {/* <span className={cx('title')}>{title}</span> */}
            <div className={cx('menu-item')}>
                <Link to={config.routes.home} className={cx('menu')}>
                    <FontAwesomeIcon icon={faHouse} className={cx('icon-menuItem')} />
                    <span className={cx('title')}>Trang chủ</span>
                </Link>
            </div>
            {khuvucs?.length > 0 &&
                khuvucs.map((item) => {
                    return (
                        <Menu key={item.MaKhuVuc} className={cx('menu-item')}>
                            <MenuItem to={`/${formatVietnameseToString(item.TenKhuVuc)}`}>
                                <FontAwesomeIcon icon={faMapLocationDot} className={cx('icon-menuItem')} />
                                <span className={cx('title')}>{item.TenKhuVuc}</span>
                            </MenuItem>
                        </Menu>
                    );
                })}
        </aside>
    );
}

export default Sidebar;
