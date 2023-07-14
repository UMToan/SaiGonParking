import classnames from 'classnames/bind';
import styles from '../DistrictMot/DistrictMot.module.scss';
import { useState, useEffect } from 'react';
import { getApibaixeQGv } from '../../services/baixe';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

const cx = classnames.bind(styles);

function DistrictGoVap() {
    const [baixeqGvs, setBaixeqGvs] = useState([]);

    useEffect(() => {
        const fectBaixeQGvs = async () => {
            const baixequanGv = await getApibaixeQGv();
            if (baixequanGv.data.err === 0) {
                setBaixeqGvs(baixequanGv.data.baixe);
            }
        };
        fectBaixeQGvs();
    }, []);

    return (
        <div className={cx('content-one')}>
            {baixeqGvs?.length > 0 && (
                <>
                    {baixeqGvs.map((item, index) => {
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

export default DistrictGoVap;
