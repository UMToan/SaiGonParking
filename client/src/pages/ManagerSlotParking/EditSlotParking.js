import { useState } from 'react';
import classNames from 'classnames/bind';
import Swal from 'sweetalert2';

import styles from '../AddBaiXe/AddBaiXe.module.scss';
import Input from '../../components/Input';
import Button from '../../components/Button/Button';
import FormCRUD from '../../layouts/components/FormCURD/FormCRUD';

const cx = classNames.bind(styles);

function EditBaiXe() {
    const [invalidFields, setInvalidFields] = useState([]);

    const handleEdit = () => {
        Swal.fire('thành công', 'Chỉnh sửa bãi xe thành công', 'success');
    };

    return (
        <FormCRUD title={'Chỉnh sửa trạng thái ô gửi xe'}>
            <Input setInvalidFields={setInvalidFields} invalidFields={invalidFields} label={'ô gửi xe'} />
            <Input setInvalidFields={setInvalidFields} invalidFields={invalidFields} label={'Trạng thái'} />
            <div className={cx('btn-submit')}>
                <Button outline onClick={handleEdit}>
                    Chỉnh sửa hoàn tất
                </Button>
            </div>
        </FormCRUD>
    );
}

export default EditBaiXe;
