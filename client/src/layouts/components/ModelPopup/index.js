import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './ModelPopup.module.scss';

const cx = classNames.bind(styles);

function ModelPopup({ setEditParking, setAddParking, children, setEditUser, setEditSlot }) {
    return (
        <>
            <div
                className={cx('modal')}
                onClick={(e) => {
                    e.stopPropagation();
                    setEditParking(false);
                    setEditUser(false);
                    setEditSlot(false);
                }}
            >
                <div className={cx('overlay')}>
                    <div className={cx('modal-content')} onClick={(e) => e.stopPropagation()}>
                        {children}
                        <FontAwesomeIcon
                            icon={faClose}
                            className={cx('close-modal')}
                            onClick={() => setAddParking(false)}
                        ></FontAwesomeIcon>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ModelPopup;
