import classNames from 'classnames/bind';
import styles from './AddBaiXe.module.scss';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';

import Input from '../../components/Input';
import Button from '../../components/Button/Button';
import Loading from '../../components/Loading';
import validateFrom from '../../components/ValidateForm';
import { apiUploadImages } from '../../services/baixe';
import { apiCreateNewBaiXe } from '../../services/baixe';
import config from '../../config';
import Header from '../../layouts/components/Header/Header';

const cx = classNames.bind(styles);

function AddBaiXe() {
    const [payload, setPayload] = useState({
        MaKhuVuc: '',
        TenBaiXe: '',
        ViTriBaiXe: '',
        SDTBaiXe: '',
        images: '',
    });
    const [invalidFields, setInvalidFields] = useState([]);

    //img
    const [imagesReview, setImagesReview] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    //loading

    const { userData } = useSelector((state) => state.user);
    const { isLoggedIn } = useSelector((state) => state.auth);

    if (!isLoggedIn) {
        return <Navigate to={config.routes.login} replace={true} />;
    }

    if (userData.role === 1) {
        return <Navigate to={config.routes.home} replace={true} />;
    }
    // hàm lấy hình ảnh

    const handleFiles = async (e) => {
        e.stopPropagation();
        setIsLoading(true);
        let images = [];
        const files = e.target.files;
        const formData = new FormData();
        for (let i of files) {
            formData.append('file', i); // i ở đây có nghĩa là mỗi i là 1 cái file
            formData.append('upload_preset', process.env.REACT_APP_UPLOAD_ASSETS_NAME);

            let response = await apiUploadImages(formData);
            if (response.status === 200) images = [...images, response.data?.secure_url];
            // cóp nghĩ là gán lạicái giá trị response.data.secure.. vào lại biến images
        }
        setIsLoading(false);
        setImagesReview((prev) => [...prev, ...images]); //setState lại để renđer ra preview
        setPayload((prev) => ({ ...prev, images: [...payload.images, ...images] }));
    };
    //hàm xóa ảnh
    const handleDeleteImage = (image) => {
        setImagesReview((prev) => prev?.filter((item) => item !== image));
        setPayload((prev) => ({
            ...prev,
            images: prev.images?.filter((item) => item !== image),
        }));
    };

    const handleSubmit = async () => {
        const result = validateFrom(payload, setInvalidFields);
        console.log(result);
        console.log(invalidFields);
        let finalPayload = {
            ...payload,
        };
        const baixe = await apiCreateNewBaiXe(finalPayload);
        if (baixe?.data.err === 0) {
            Swal.fire('Thành công', 'Đã thêm được bãi xe', 'success').then(() => {
                setPayload({
                    MaKhuVuc: '',
                    TenBaiXe: '',
                    ViTriBaiXe: '',
                    SDTBaiXe: '',
                    images: '',
                });
            });
        } else {
            Swal.fire('Oops', 'Có lỗi gì rồi', 'error');
        }
    };

    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('containerr')}>
                <div className={cx('title')}>
                    <h1 className={cx('title-booking')}>Thêm bãi xe</h1>
                </div>
                <div className={cx('content')}>
                    <div title={'Thêm bãi xe'}>
                        <Input
                            setInvalidFields={setInvalidFields}
                            invalidFields={invalidFields}
                            label={'Khu vực: '}
                            value={payload.MaKhuVuc}
                            setValue={setPayload}
                            keyPayload={'MaKhuVuc'}
                        />
                        <Input
                            setInvalidFields={setInvalidFields}
                            invalidFields={invalidFields}
                            label={'Tên bãi xe: '}
                            value={payload.TenBaiXe}
                            setValue={setPayload}
                            keyPayload={'TenBaiXe'}
                        />
                        <Input
                            setInvalidFields={setInvalidFields}
                            invalidFields={invalidFields}
                            label={'Vị trí bãi xe: '}
                            value={payload.ViTriBaiXe}
                            setValue={setPayload}
                            keyPayload={'ViTriBaiXe'}
                        />
                        <Input
                            setInvalidFields={setInvalidFields}
                            invalidFields={invalidFields}
                            label={'Số điện thoại bãi xe: '}
                            value={payload.SDTBaiXe}
                            setValue={setPayload}
                            keyPayload={'SDTBaiXe'}
                        />
                        <div className={cx('content-about')}>
                            <div className={cx('content-h3-heading')}>
                                <p className={cx('content-h2-heading')}>Hình ảnh</p>
                            </div>
                            <div className={cx('form-image')}>
                                <div className={cx('form-choose-image')}>
                                    <label htmlFor="file">
                                        {isLoading ? (
                                            <Loading />
                                        ) : (
                                            <FontAwesomeIcon className={cx('icon-img')} icon={faCamera} />
                                        )}
                                        <span>
                                            <input type="file" id="file" hidden multiple onChange={handleFiles} />
                                        </span>
                                        Thêm Ảnh
                                    </label>
                                </div>
                            </div>
                            <div className={cx('content-h3-heading')}>
                                <p className={cx('content-h2-heading')}>{imagesReview.length > 0 ? 'Preview' : ''}</p>
                                <div className={cx('preview-img')}>
                                    {imagesReview &&
                                        imagesReview.length > 0 &&
                                        imagesReview?.map((item, index) => {
                                            return (
                                                <div key={index} className={cx('preview-img-wrapper')}>
                                                    <img src={item} alt="preview" className={cx('preview-img-item')} />
                                                    <span
                                                        onClick={() => handleDeleteImage(item)}
                                                        className={cx('icon-delete-img')}
                                                    >
                                                        <FontAwesomeIcon icon={faCircleXmark} />
                                                    </span>
                                                </div>
                                            );
                                        })}
                                </div>
                            </div>
                        </div>

                        <div className={cx('btn-submit')}>
                            <Button outline onClick={handleSubmit}>
                                Thêm bãi
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddBaiXe;
