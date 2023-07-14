import classNames from 'classnames/bind';
import styles from '../AddBaiXe/AddBaiXe.module.scss';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import Swal from 'sweetalert2';

import Input from '../../components/Input';
import Button from '../../components/Button/Button';
import config from '../../config';
import Header from '../../layouts/components/Header/Header';

const cx = classNames.bind(styles);

function AddSlotParking() {
    const [invalidFields, setInvalidFields] = useState([]);

    //loading

    const { userData } = useSelector((state) => state.user);
    const { isLoggedIn } = useSelector((state) => state.auth);

    if (!isLoggedIn) {
        return <Navigate to={config.routes.login} replace={true} />;
    }
    if (userData.role === 1) {
        return <Navigate to={config.routes.home} replace={true} />;
    }

    const handleSubmit = () => {
        Swal.fire('Thành công', 'Đã thêm ô gửi xe', 'success');
    };

    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('containerr')}>
                <div className={cx('title')}>
                    <h1 className={cx('title-booking')}>Thêm ô gửi xe</h1>
                </div>
                <div className={cx('content')}>
                    <div title={'Thêm bãi xe'}>
                        <Input
                            setInvalidFields={setInvalidFields}
                            invalidFields={invalidFields}
                            label={'Tên Bãi xe: '}
                        />
                        <Input
                            setInvalidFields={setInvalidFields}
                            invalidFields={invalidFields}
                            label={'Vị trí bãi xe: '}
                        />

                        <Input
                            setInvalidFields={setInvalidFields}
                            invalidFields={invalidFields}
                            label={'Vị trí ô gửi xe: '}
                        />
                        <Input
                            setInvalidFields={setInvalidFields}
                            invalidFields={invalidFields}
                            label={'Trạng thái: '}
                        />

                        <div className={cx('btn-submit')}>
                            <Button outline onClick={handleSubmit}>
                                Thêm ô gửi xe
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddSlotParking;
