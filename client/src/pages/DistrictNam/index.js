import classNames from 'classnames/bind';
import styles from '../DistrictMot/DistrictMot.module.scss';
import { useState, useEffect } from 'react';
import { getApibaixeQ5 } from '../../services/baixe';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function DistrictNam() {
    const [baixeq5s, setBaixeq5s] = useState([]);

    useEffect(() => {
        const fectBaixeQ5s = async () => {
            const baixequan5 = await getApibaixeQ5();
            if (baixequan5.data.err === 0) {
                setBaixeq5s(baixequan5.data.baixe);
            }
        };
        fectBaixeQ5s();
    }, []);

    return (
        <div className={cx('content-one')}>
            {baixeq5s?.length > 0 && (
                <>
                    {baixeq5s.map((item, index) => {
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

export default DistrictNam;
