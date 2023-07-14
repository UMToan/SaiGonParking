import classNames from 'classnames/bind';
import styles from '../../../pages/AddBaiXe/AddBaiXe.module.scss';

const cx = classNames.bind(styles);
function FormCRUD({ children, title }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('title')}>
                    <h1 className={cx('title-booking')}>{title}</h1>
                </div>
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

export default FormCRUD;
