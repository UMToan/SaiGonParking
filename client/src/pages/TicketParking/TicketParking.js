import classNames from 'classnames/bind';
import styles from '../AddBaiXe/AddBaiXe.module.scss';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import config from '../../config';
import Input from '../../components/Input';
import Button from '../../components/Button/Button';

import Header from '../../layouts/components/Header/Header';

const cx = classNames.bind(styles);

function TicketParking() {
    const [invalidFields, setInvalidFields] = useState([]);
    const { isLoggedIn } = useSelector((state) => state.auth);

    if (!isLoggedIn) {
        return <Navigate to={config.routes.login} replace={true} />;
    }

    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('containerr')}>
                <div className={cx('title')}>
                    <h1 className={cx('title-booking')}>Phiếu gửi xe</h1>
                </div>
                <div className={cx('content')}>
                    <div title={'Thêm bãi xe'}>
                        <Input setInvalidFields={setInvalidFields} invalidFields={invalidFields} label={'Mã Phiếu: '} />
                        <Input
                            setInvalidFields={setInvalidFields}
                            invalidFields={invalidFields}
                            label={'Biển số xe: '}
                        />
                        <Input setInvalidFields={setInvalidFields} invalidFields={invalidFields} label={'Loại xe: '} />
                        <Input
                            setInvalidFields={setInvalidFields}
                            invalidFields={invalidFields}
                            label={'Ngày gửi xe: '}
                            type="date"
                        />

                        <div className={cx('btn-submit')}>
                            <Button outline>In Phiếu</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TicketParking;
