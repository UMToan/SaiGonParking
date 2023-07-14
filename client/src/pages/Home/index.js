import classNames from 'classnames/bind';
import styles from '../Content.module.scss';

import DistrictMot from '../DistrictMot';
import DistrictHai from '../DistrictHai';
import DistrictBa from '../DistrictBa';
import DistrictNam from '../DistrictNam';
import DistrictSau from '../DistrictSau';
import DistrictBay from '../DistrictBay';
import DistrictMuoi from '../DistrictMuoi';
import DistrictMuoiMot from '../DistrictMuoiMot';
import DistrictBinhThanh from '../DistrictBinhThanh';
import DistrictGoVap from '../DistrictGoVap';
import DistrictPhuNhuan from '../DistrictPhuNhuan';

const cx = classNames.bind(styles);

function Home({ key }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <DistrictMot key={key} />
                <DistrictHai />
                <DistrictBa />
                <DistrictNam />
                <DistrictSau />
                <DistrictBay />
                <DistrictMuoi />
                <DistrictMuoiMot />
                <DistrictBinhThanh />
                <DistrictGoVap />
                <DistrictPhuNhuan />
            </div>
        </div>
    );
}

export default Home;
