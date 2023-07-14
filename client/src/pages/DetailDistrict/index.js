import classNames from 'classnames/bind';
import styles from './DetailDistrict.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import 'reactjs-popup/dist/index.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getBaixe } from '../../store/actions';

import ModalPupup from '../../layouts/components/ModelPopup';
import config from '../../config';
import Header from '../../layouts/components/Header';
import Button from '../../components/Button/Button';
import OderSlotParking from '../TicketParking/OderSlotParking';

const cx = classNames.bind(styles);

function DetailDistrict() {
    const images = [
        'https://i.pinimg.com/564x/84/8f/56/848f56e5ebb70f42899c0aed1cda5956.jpg',
        'https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80',
        'https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
    ];

    const [editParking, setEditParking] = useState(false);

    const { idBaixe } = useParams();
    const dispatch = useDispatch();
    const { baixeData } = useSelector((state) => state.baixe);

    useEffect(() => {
        idBaixe && dispatch(getBaixe({ id: idBaixe }));
    }, [idBaixe, dispatch]);

    return (
        <div className={cx('wrapper')}>
            <Header />

            <div className={cx('container')}>
                <div className={cx('header-content')}>
                    <Link to={config.routes.home} className={cx('home-link')}>
                        <FontAwesomeIcon icon={faHouse} />
                        <span>/</span>Trang chủ
                    </Link>
                </div>
                <Slide>
                    <div className={cx('each-slide-effect')}>
                        <div style={{ backgroundImage: `url(${images[0]})` }}></div>
                    </div>
                    <div className={cx('each-slide-effect')}>
                        <div style={{ backgroundImage: `url(${images[1]})` }}></div>
                    </div>
                    <div className={cx('each-slide-effect')}>
                        <div style={{ backgroundImage: `url(${images[2]})` }}></div>
                    </div>
                </Slide>

                {baixeData.length > 0 &&
                    baixeData.map((item, index) => {
                        return (
                            <>
                                {index === 0 && (
                                    <div className={cx('title')} key={index}>
                                        <h3>{item.TenBaiXe}</h3>
                                    </div>
                                )}
                            </>
                        );
                    })}

                <div className={cx('content')}>
                    <div className={cx('info-parking')}>
                        {baixeData?.length > 0 &&
                            baixeData.map((item, index) => {
                                return (
                                    <div className={cx('form-parking')} key={index}>
                                        {index === 1 && (
                                            <>
                                                <h4 className={cx('heading-info')}>Thông tin bãi xe</h4>
                                                <ul>
                                                    <li className={cx('info-detail-parking')}>
                                                        <span> Tên bãi xe: {item.TenBaiXe}</span>
                                                    </li>
                                                    <li className={cx('info-detail-parking')}>
                                                        <span> Vị trí: {item.ViTriBaiXe}</span>
                                                    </li>
                                                    <li className={cx('info-detail-parking')}>
                                                        <span> Sđt: {item.SDTBaixe}</span>
                                                    </li>
                                                </ul>
                                            </>
                                        )}
                                    </div>
                                );
                            })}

                        <div className={cx('price-parking')}>
                            <h4 className={cx('heading-info')}>Bảng giá</h4>
                            {baixeData.length > 0 &&
                                baixeData.map((item, index) => {
                                    return (
                                        <ul key={item.banggia.idBaiXe}>
                                            <li className={cx('info-detail-parking')}>{item.banggia.MTGia}</li>
                                        </ul>
                                    );
                                })}
                        </div>
                    </div>

                    <div className={cx('slot-parking')}>
                        <div className={cx('title-slot-parking')}>
                            <h4>Chỗ gửi xe</h4>
                        </div>

                        {baixeData.length > 0 &&
                            baixeData.map((item, index) => {
                                return (
                                    <>
                                        {item.baixeslot.TrangThai === 0 ? (
                                            <>
                                                {index < 10 && (
                                                    <>
                                                        <Button
                                                            outline
                                                            className={cx('btn-modal')}
                                                            onClick={() => setEditParking(true)}
                                                        >
                                                            <span>{item.baixeslot.id}</span>
                                                        </Button>
                                                        {editParking && (
                                                            <ModalPupup setEditParking={setEditParking}>
                                                                <OderSlotParking btnTitle={'Đặt chỗ gửi xe'}>
                                                                    {item.baixeslot.id}
                                                                </OderSlotParking>
                                                            </ModalPupup>
                                                        )}
                                                    </>
                                                )}
                                            </>
                                        ) : (
                                            <>
                                                {index < 10 && (
                                                    <Button disabled className={cx('btn-modal')}>
                                                        <span key={index}>{item.baixeslot.id}</span>
                                                    </Button>
                                                )}
                                            </>
                                        )}
                                    </>
                                );
                            })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailDistrict;
