import classNames from 'classnames/bind';
import styles from '../DistrictMot/DistrictMot.module.scss';
import { useState, useEffect } from 'react';
import { getApibaixeQ2 } from '../../services/baixe';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function DistrictHai({ children }) {
    //lấy dữ liệu bãi xe quận 2 từ data
    const [baixeq2s, setBaixeq2s] = useState([]);

    useEffect(() => {
        const fetchBaixeQ2s = async () => {
            const baixequan2 = await getApibaixeQ2();
            if (baixequan2.data.err === 0) {
                setBaixeq2s(baixequan2.data.baixe);
            }
        };
        fetchBaixeQ2s();
    }, []);

    return (
        <div className={cx('content-one')}>
            {baixeq2s?.length > 0 && (
                <>
                    {baixeq2s.map((item, index) => {
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

export default DistrictHai;
