import classnames from 'classnames/bind';
import styles from '../DistrictMot/DistrictMot.module.scss';
import { useState, useEffect } from 'react';
import { getApibaixeQ7 } from '../../services/baixe';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

const cx = classnames.bind(styles);

function DistrictBay() {
    const [baixeq7s, setBaixeq7s] = useState([]);

    useEffect(() => {
        const fectBaixeQ7s = async () => {
            const baixequan7 = await getApibaixeQ7();
            if (baixequan7.data.err === 0) {
                setBaixeq7s(baixequan7.data.baixe);
            }
        };
        fectBaixeQ7s();
    }, []);

    return (
        <div className={cx('content-one')}>
            {baixeq7s?.length > 0 && (
                <>
                    {baixeq7s.map((item, index) => {
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

export default DistrictBay;
