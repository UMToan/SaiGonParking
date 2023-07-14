import classnames from 'classnames/bind';
import styles from '../DistrictMot/DistrictMot.module.scss';
import { useState, useEffect } from 'react';
import { getApibaixeQ11 } from '../../services/baixe';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

const cx = classnames.bind(styles);

function DistrictMuoiMot() {
    const [baixeq11s, setBaixeq11s] = useState([]);

    useEffect(() => {
        const fectBaixeQ11s = async () => {
            const baixequan11 = await getApibaixeQ11();
            if (baixequan11.data.err === 0) {
                setBaixeq11s(baixequan11.data.baixe);
            }
        };
        fectBaixeQ11s();
    }, []);

    return (
        <div className={cx('content-one')}>
            {baixeq11s?.length > 0 && (
                <>
                    {baixeq11s.map((item, index) => {
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

export default DistrictMuoiMot;
