import classnames from 'classnames/bind';
import styles from '../DistrictMot/DistrictMot.module.scss';
import { useState, useEffect } from 'react';
import { getApibaixeQ10 } from '../../services/baixe';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

const cx = classnames.bind(styles);

function DistrictMuoi() {
    const [baixeq10s, setBaixeq10s] = useState([]);

    useEffect(() => {
        const fectBaixeQ10s = async () => {
            const baixequan10 = await getApibaixeQ10();
            if (baixequan10.data.err === 0) {
                setBaixeq10s(baixequan10.data.baixe);
            }
        };
        fectBaixeQ10s();
    }, []);

    return (
        <div className={cx('content-one')}>
            {baixeq10s?.length > 0 && (
                <>
                    {baixeq10s.map((item, index) => {
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

export default DistrictMuoi;
