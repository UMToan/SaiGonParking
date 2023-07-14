import { useState } from 'react';
import classNames from 'classnames/bind';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import styles from '../AddBaiXe/AddBaiXe.module.scss';
import Input from '../../components/Input';
import Button from '../../components/Button/Button';
import FormCRUD from '../../layouts/components/FormCURD/FormCRUD';
import config from '../../config';

const cx = classNames.bind(styles);

function TicketParking({ btnTitle, children }) {
    const navigate = useNavigate();
    const [invalidFields, setInvalidFields] = useState([]);
    const [ticket, setTicket] = useState(false);

    const handleSubmit = () => {
        Swal.fire('Thành công', 'Đã đặt chỗ gửi xe', 'success');
        setTicket(true);
    };

    useEffect(() => {
        setTimeout(() => {
            ticket && navigate(config.routes.phieuguixe);
        }, 2000);
    }, [ticket, navigate]);

    return (
        <FormCRUD title={'Đặt chỗ gửi xe'}>
            <Input
                setInvalidFields={setInvalidFields}
                invalidFields={invalidFields}
                label={'Vị trí ô gửi xe'}
                value={children}
            />
            <Input setInvalidFields={setInvalidFields} invalidFields={invalidFields} label={'Biển số xe'} />
            <Input setInvalidFields={setInvalidFields} invalidFields={invalidFields} label={'Loại xe'} />
            <div className={cx('btn-submit')} onClick={handleSubmit}>
                <Button outline>{btnTitle}</Button>
            </div>
        </FormCRUD>
    );
}

export default TicketParking;
