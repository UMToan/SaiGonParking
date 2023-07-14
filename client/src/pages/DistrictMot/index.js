import classNames from 'classnames/bind';
import styles from './DistrictMot.module.scss';
import { useState, useEffect } from 'react';
import { getApibaixeQ1 } from '../../services/baixe';
import { formatVietnameseToString } from '../../config/routes';
import config from '../../config';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function DistrictMot() {
    //lấy dữ liệu bãi xe quận 1 từ data
    const [baixeq1s, setBaixeq1s] = useState([]);

    useEffect(() => {
        const fetchBaixeQ1s = async () => {
            const baixeq1 = await getApibaixeQ1();
            if (baixeq1?.data.err === 0) {
                setBaixeq1s(baixeq1.data.baixe);
            }
        };
        fetchBaixeQ1s();
    }, []);

    return (
        <div className={cx('content-one')}>
            {baixeq1s?.length > 0 && (
                <>
                    {baixeq1s.map((item, index) => {
                        const tenKhuVuc = item.khuvuc.TenKhuVuc;
                        return (
                            <>
                                {index === 0 && <h1>{`Bãi gửi xe ${tenKhuVuc}`}</h1>}
                                <div className={cx('main-content')} key={index}>
                                    <div className={cx('item-content')}>
                                        <Link
                                            className={cx('title-parking')}
                                            to={`${config.routes.chitiet}${formatVietnameseToString(item.TenBaiXe)}/${
                                                item.id
                                            }`}
                                        >
                                            {item.TenBaiXe}
                                        </Link>
                                        <div className={cx('item-location')}>
                                            <FontAwesomeIcon className={cx('icon-location')} icon={faLocationDot} />
                                            <span className={cx('title')}>{item.ViTriBaiXe}</span>
                                        </div>
                                    </div>
                                </div>
                            </>
                        );
                    })}
                </>
            )}
        </div>
    );
}

export default DistrictMot;
