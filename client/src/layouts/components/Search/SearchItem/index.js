import classNames from 'classnames/bind';
import styles from './SearchItem.module.scss';

const cx = classNames.bind(styles);

function SearchItem({ children, item }) {
    return (
        // <Link to={children} className={cx('wrapper')}>
        //     <div className={cx('info')}>
        //         <h4 className={cx('name')}>{children}</h4>
        //     </div>
        // </Link>
        <div className={cx('wrapper')}>{children}</div>
    );
    //
}

export default SearchItem;
