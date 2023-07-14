import classnames from 'classnames/bind';
import styles from '../DistrictMot/DistrictMot.module.scss';
import { useState, useEffect } from 'react';
import { getApibaixeQPn } from '../../services/baixe';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

const cx = classnames.bind(styles);

function DistrictPhuNhuan({ data }) {
    const [baixeqPns, setBaixeqPns] = useState([]);

    useEffect(() => {
        const fectBaixeQPns = async () => {
            const baixequanPn = await getApibaixeQPn();
            if (baixequanPn.data.err === 0) {
                setBaixeqPns(baixequanPn.data.baixe);
            }
        };
        fectBaixeQPns();
    }, []);

    return (
        <div className={cx('content-one')}>
            {baixeqPns?.length > 0 && (
                <>
                    {baixeqPns.map((item, index) => {
                        const tenKhuVuc = item.khuvuc.TenKhuVuc;
                        return (
                            <>
                                {index === 0 && <h1>{`Bãi gửi xe ${tenKhuVuc}`}</h1>}
                                <div className={cx('main-content')} key={index}>
                                    <div className={cx('item-content')}>
                                        <p className={cx('title')}>{item.TenBaiXe}</p>
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

export default DistrictPhuNhuan;
