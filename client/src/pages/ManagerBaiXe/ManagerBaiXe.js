import classNames from 'classnames/bind';
import styles from './ManagerBaiXe.module.scss';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';

import Header from '../../layouts/components/Header/Header';
import { getAllBaixe } from '../../store/actions/baixe';
import Button from '../../components/Button/Button';
import ModalPupup from '../../layouts/components/ModelPopup';
import EditBaiXe from '../EditBaiXe';

const cx = classNames.bind(styles);

function ManagerBaiXe() {
    const [editParking, setEditParking] = useState(false);

    const dispatch = useDispatch();
    const { baixeData } = useSelector((state) => state.baixe);
    useEffect(() => {
        dispatch(getAllBaixe());
    }, [dispatch]);

    const handleDelete = () => {
        Swal.fire({
            title: 'Bạn có chắc muốn xóa bãi xe này?',
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
                    <h1 className={cx('title-booking')}>Quản lý bãi xe</h1>
                </div>

                <tbody className={cx('tbody')}>
                    <tr>
                        <th>Khu Vực</th>
                        <th>Tên bãi xe</th>
                        <th>Vị trí</th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                    {baixeData?.length > 0 &&
                        baixeData.map((item) => {
                            return (
                                <tr key={item.id}>
                                    <td>{item?.MaKhuVuc}</td>
                                    <td>{item?.TenBaiXe}</td>
                                    <td>{item?.ViTriBaiXe}</td>
                                    <td></td>
                                    <td>
                                        <Button outline onClick={() => setEditParking(true)}>
                                            Sửa
                                        </Button>
                                        {editParking && (
                                            <ModalPupup setEditParking={setEditParking}>
                                                <EditBaiXe />
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

export default ManagerBaiXe;
