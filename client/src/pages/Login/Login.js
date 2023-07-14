import classNames from 'classnames/bind';
import styles from './Login.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {} from '@fortawesome/fontawesome-svg-core';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

import Button from '../../components/Button';
import Input from '../../components/Input';
import config from '../../config';
import validateFrom from '../../components/ValidateForm';
import * as actions from '../../store/actions';

const cx = classNames.bind(styles);

function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isLoggedIn, msg, update } = useSelector((state) => state.auth);
    // tạo 1 cái state để nhận cái gia trị thay đổi của ô input
    const [payload, setPayload] = useState({
        mail: '',
        matkhau: '',
    });

    // validate from
    const [invalidFields, setInvalidFields] = useState([]);

    //xử lý validate

    useEffect(() => {
        isLoggedIn && navigate(config.routes.home);
    }, [isLoggedIn, navigate]);

    useEffect(() => {
        msg && Swal.fire('Oops!', msg, 'error');
    }, [msg, update]);

    // gọi api
    const handleLogin = () => {
        let invalids = validateFrom(payload, setInvalidFields);
        if (invalids === 0) {
            dispatch(actions.login(payload));
        }
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('login-from')}>
                    <div className={cx('title-login')}>
                        <span className={cx('login')}>Đăng nhập</span>
                    </div>
                    <Input
                        setInvalidFields={setInvalidFields}
                        invalidFields={invalidFields}
                        label={'Nhập mail của bạn:'}
                        value={payload.mail}
                        setValue={setPayload}
                        keyPayload={'mail'}
                        type="mail"
                    />
                    <Input
                        setInvalidFields={setInvalidFields}
                        invalidFields={invalidFields}
                        label={'Mật khẩu:'}
                        value={payload.matkhau}
                        setValue={setPayload}
                        keyPayload={'matkhau'}
                        type="password"
                    />
                    {console.log(payload)}
                    <div className={cx('forgot-pass')}>
                        <span>Quên mật khẩu?</span>
                    </div>
                    <div className={cx('btn-login')}>
                        <Button btnLogin onClick={handleLogin}>
                            Đăng nhập
                        </Button>
                    </div>
                    <div className={cx('title-referentLogin')}>
                        <span>Hoặc đăng nhập với</span>
                    </div>
                    <div className={cx('referent-login')}>
                        <FontAwesomeIcon icon={faGoogle} style={{ color: '#ec094d' }} className={cx('google')} />
                        <span></span>
                        <FontAwesomeIcon icon={faFacebook} style={{ color: '#3f78d9' }} className={cx('facebook')} />
                    </div>
                </div>
                <div className={cx('option-from')}>
                    <div className={cx('login-options')}>
                        <span>Bạn không có mật khẩu?</span>
                        <span className={cx('span')}></span>
                        <a href={config.routes.register} className={cx('sign-up')}>
                            Đăng ký
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
