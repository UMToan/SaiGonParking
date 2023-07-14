import classNames from 'classnames/bind';
import styles from '../ManagerBaiXe/ManagerBaiXe.module.scss';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';

import Header from '../../layouts/components/Header/Header';
import { getAllBaixe } from '../../store/actions/baixe';
import Button from '../../components/Button/Button';
import ModalPupup from '../../layouts/components/ModelPopup';
import EditSlotParking from './EditSlotParking';

const cx = classNames.bind(styles);

function ManagerSlotParking() {
    const [editSlot, setEditSlot] = useState(false);

    const dispatch = useDispatch();
    const { baixeData } = useSelector((state) => state.baixe);
    useEffect(() => {
        dispatch(getAllBaixe());
    }, [dispatch]);

    const handleDelete = () => {
        Swal.fire({
            title: 'Bạn có chắc muốn xóa ô gửi xe này?',
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
                    <h1 className={cx('title-booking')}>Quản lý ô gửi xe</h1>
                </div>

                <tbody className={cx('tbody')}>
                    <tr>
                        <th>Khu Vực</th>
                        <th>Tên bãi xe</th>
                        <th>ô gửi xe</th>
                        <th>Trạng thái</th>
                        <th></th>
                        <th></th>
                    </tr>
                    {baixeData?.length > 0 &&
                        baixeData.map((item) => {
                            return (
                                <tr key={item.id}>
                                    <td>{item?.MaKhuVuc}</td>
                                    <td>{item?.TenBaiXe}</td>
                                    <td>{item?.baixeslot.id}</td>
                                    {item.baixeslot.TrangThai === 1 ? (
                                        <td className={cx('emty')}>Đang có xe gửi</td>
                                    ) : (
                                        <td className={cx('not-emty')}>Trống</td>
                                    )}
                                    <td>
                                        <Button outline onClick={() => setEditSlot(true)}>
                                            Sửa
                                        </Button>
                                        {editSlot && (
                                            <ModalPupup setEditParking={setEditSlot}>
                                                <EditSlotParking />
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

export default ManagerSlotParking;
