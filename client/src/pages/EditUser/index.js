import classNames from 'classnames/bind';
import styles from '../AddBaiXe/AddBaiXe.module.scss';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

import Input from '../../components/Input';
import Button from '../../components/Button/Button';
import FormCRUD from '../../layouts/components/FormCURD/FormCRUD';
import config from '../../config';

const cx = classNames.bind(styles);

function EditUser() {
    const navigate = useNavigate();
    const [invalidFields, setInvalidFields] = useState([]);

    const { userData } = useSelector((state) => state.user);
    const [userEdit, setUserEdit] = useState(false);

    const handleEdit = () => {
        Swal.fire('Thành công', 'Chỉnh sửa thông tin thành công', 'success');
        setUserEdit(true);
    };

    useEffect(() => {
        setTimeout(() => {
            userEdit && navigate(config.routes.home);
        }, 2000);
    }, [userEdit]);

    return (
        <FormCRUD title={'Chỉnh sửa tài khoản'}>
            <Input
                setInvalidFields={setInvalidFields}
                invalidFields={invalidFields}
                label={'Mail'}
                value={userData?.mail}
            />
            <Input
                setInvalidFields={setInvalidFields}
                invalidFields={invalidFields}
                label={'Số điện thoại'}
                value={userData.sdt}
            />
            <Input
                setInvalidFields={setInvalidFields}
                invalidFields={invalidFields}
                label={'Mật Khẩu'}
                value={userData.matkhau}
            />
            <Input
                setInvalidFields={setInvalidFields}
                invalidFields={invalidFields}
                label={'Vai trò: '}
                value={userData.role === 1 ? 'User' : 'Admin'}
            />

            <div className={cx('btn-submit')}>
                <Button outline onClick={handleEdit}>
                    {' '}
                    Hoàn Tất Chỉnh Sửa
                </Button>
            </div>
        </FormCRUD>
    );
}

export default EditUser;
