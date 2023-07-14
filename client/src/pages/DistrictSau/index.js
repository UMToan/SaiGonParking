import classnames from 'classnames/bind';
import styles from '../DistrictMot/DistrictMot.module.scss';
import { useState, useEffect } from 'react';
import { getApibaixeQ6 } from '../../services/baixe';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

const cx = classnames.bind(styles);

function DistrictSau() {
    const [baixeq6s, setBaixeq6s] = useState([]);

    useEffect(() => {
        const fectBaixeQ6s = async () => {
            const baixequan6 = await getApibaixeQ6();
            if (baixequan6.data.err === 0) {
                setBaixeq6s(baixequan6.data.baixe);
            }
        };
        fectBaixeQ6s();
    }, []);

    return (
        <div className={cx('content-one')}>
            {baixeq6s?.length > 0 && (
                <>
                    {baixeq6s.map((item, index) => {
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

export default DistrictSau;
