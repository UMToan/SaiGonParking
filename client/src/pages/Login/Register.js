import classNames from 'classnames/bind';
import styles from './Login.module.scss';
import {} from '@fortawesome/fontawesome-svg-core';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

import validateFrom from '../../components/ValidateForm';
import Button from '../../components/Button';
import Input from '../../components/Input';
import config from '../../config';
import * as actions from '../../store/actions';

const cx = classNames.bind(styles);

function Register() {
    const dispatch = useDispatch();
    const { isRegister } = useSelector((state) => state.auth); // check đăng ký thì cái isLoggedIn được lấy bên cái authReducer
    const navigate = useNavigate();
    const [payload, setPayload] = useState({
        mail: '',
        sdt: '',
        matkhau: '',
    });

    // validate from
    const [invalidFields, setInvalidFields] = useState([]);

    // hàm xử lý validate

    // sau khi đăng ký thành công thì cái depen thay đổi
    // mà thay đổi thì code hàm useEffect sẽ thực hiện
    useEffect(() => {
        isRegister && navigate(config.routes.login); //có tác dụng là chuyển trang
    }, [isRegister, navigate]);

    const handleRegister = async () => {
        // console.log(payload);
        let invalids = validateFrom(payload, setInvalidFields);
        if (invalids === 0) {
            dispatch(actions.register(payload)); // gọi api
        }
        //console.log(invalids);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container-register')}>
                <div className={cx('register-from')}>
                    <div className={cx('title-login')}>
                        <span className={cx('login')}>Đăng ký</span>
                    </div>
                    <Input
                        setInvalidFields={setInvalidFields}
                        invalidFields={invalidFields}
                        label={'Nhập mail:'}
                        value={payload.mail}
                        setValue={setPayload}
                        keyPayload={'mail'}
                        type="mail"
                    />
                    <Input
                        setInvalidFields={setInvalidFields}
                        invalidFields={invalidFields}
                        label={'Nhập Số điện thoại:'}
                        value={payload.sdt}
                        setValue={setPayload}
                        keyPayload={'sdt'}
                    />
                    <Input
                        setInvalidFields={setInvalidFields}
                        invalidFields={invalidFields}
                        label={'Nhập Mật khẩu:'}
                        value={payload.matkhau}
                        setValue={setPayload}
                        keyPayload={'matkhau'}
                        type="password"
                    />
                    <div className={cx('btn-login')}>
                        <Button btnLogin onClick={handleRegister}>
                            Đăng Ký
                        </Button>
                    </div>
                </div>
                <div className={cx('option-from')}>
                    <div className={cx('login-options')}>
                        <span>Bạn đã có tài khoản?</span>
                        <span className={cx('span')}></span>
                        <a href={config.routes.login} className={cx('sign-up')}>
                            Đăng nhập
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
