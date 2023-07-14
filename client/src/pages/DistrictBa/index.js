import classNames from 'classnames/bind';
import styles from '../DistrictMot/DistrictMot.module.scss';
import { useState, useEffect } from 'react';
import { getApibaixeQ3 } from '../../services/baixe';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function DistrictBa() {
    const [baixeq3s, setBaixeq3s] = useState([]);

    useEffect(() => {
        const fectBaixeQ3s = async () => {
            const baixequan3 = await getApibaixeQ3();
            if (baixequan3.data.err === 0) {
                setBaixeq3s(baixequan3.data.baixe);
            }
        };
        fectBaixeQ3s();
    }, []);

    return (
        <div className={cx('content-one')}>
            {baixeq3s?.length > 0 && (
                <>
                    {baixeq3s.map((item, index) => {
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

export default DistrictBa;
