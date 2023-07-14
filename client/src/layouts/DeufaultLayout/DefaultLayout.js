import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>
                    <div className={cx('content-one')}>
                        <h2 className={cx('content-header')}>Các bãi gửi xe máy 24/24 tại HCM</h2>
                        <em>
                            Bạn đang tìm kiếm bãi gửi xe máy 24/24 tại các Quận Huyện ở HCM. Nội dung dưới đây sẽ gợi ý
                            một số địa điểm gửi xe qua đêm trên địa bàn các Quận Huyện tại Hồ Chí Minh. Cùng xem nhé!
                        </em>
                    </div>
                    <div className={cx('main-content')}>{children}</div>
                </div>
            </div>
        </div>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DefaultLayout;
