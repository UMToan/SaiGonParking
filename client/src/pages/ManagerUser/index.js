import classNames from 'classnames/bind';
import styles from './ManagerBaiXe.module.scss';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import Swal from 'sweetalert2';

import EditUser from '../EditUser';
import ModalPupup from '../../layouts/components/ModelPopup';
import Header from '../../layouts/components/Header/Header';
import { getApiAllUser } from '../../services/user';
import config from '../../config';
import Button from '../../components/Button/Button';

const cx = classNames.bind(styles);

function ManagerUser() {
    const [user, setUser] = useState([]);
    const [editUser, setEditUser] = useState(false);

    useEffect(() => {
        const fectUser = async () => {
            const userAll = await getApiAllUser();
            if (userAll.data.err === 0) {
                setUser(userAll.data.user);
            }
        };
        fectUser();
    }, []);

    const { userData } = useSelector((state) => state.user);
    const { isLoggedIn } = useSelector((state) => state.auth);

    if (!isLoggedIn) {
        return <Navigate to={config.routes.login} replace={true} />;
    }

    if (userData.role === 1) {
        return <Navigate to={config.routes.home} replace={true} />;
    }

    const handleDelete = () => {
        Swal.fire({
            title: 'Bạn có chắc muốn xóa tài khoản này?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Xóa',
            denyButtonText: `Không xóa`,
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                Swal.fire('Saved!', '', 'success');
            } else if (result.isDenied) {
                Swal.fire('Changes are not saved', '', 'info');
            }
        });
    };

    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <div className={cx('title')}>
                    <h1 className={cx('title-booking')}>Quản lý tài khoản</h1>
                </div>

                <tbody className={cx('tbody')}>
                    <tr>
                        <th>Mail</th>
                        <th>Số điện thoại</th>
                        <th>Mật khẩu</th>
                        <th>Role</th>
                        <th></th>
                        <th></th>
                    </tr>
                    {user?.length > 0 &&
                        user.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{item.mail}</td>
                                    <td>{item.sdt}</td>
                                    <td>{item.matkhau}</td>
                                    {item.role === 1 ? <td>Người dùng</td> : <td>Quản trị viên</td>}

                                    <td>
                                        <Button outline onClick={() => setEditUser(true)}>
                                            Sửa
                                        </Button>
                                        {editUser && (
                                            <ModalPupup setEditParking={setEditUser}>
                                                <EditUser />
                                            </ModalPupup>
                                        )}
                                    </td>
                                    <td>
                                        <Button outline onClick={handleDelete}>
                                            Xóa
                                        </Button>
                                    </td>
                                </tr>
                            );
                        })}
                </tbody>
            </div>
        </div>
    );
}

export default ManagerUser;
