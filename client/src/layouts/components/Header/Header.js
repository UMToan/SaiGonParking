import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCar,
    faEllipsisVertical,
    faGear,
    faLandmark,
    faMoon,
    faPlus,
    faQuestionCircle,
    faRectangleList,
    faRightFromBracket,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import config from '../../../config';
import { useDispatch, useSelector } from 'react-redux';

import styles from './Header.module.scss';
import Button from '../../../components/Button';
import Image from '../../../components/Image';
import Search from '../Search';
import * as actions from '../../../store/actions';
import { useEffect } from 'react';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '../Search/Popper';

const cx = classNames.bind(styles);

function Header() {
    const dispatch = useDispatch();
    const { isLoggedIn } = useSelector((state) => state.auth);
    const { userData } = useSelector((state) => state.user);

    useEffect(() => {
        setTimeout(() => {
            isLoggedIn && dispatch(actions.getUser()); // đặt thời gian để lấy được token thông tin người dùng
        }, 1000);
    }, [isLoggedIn, dispatch]);

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('div_logo')}>
                    <Link to={config.routes.home} className={cx('logo_parking')}>
                        <Image
                            className={cx('logo')}
                            src="https://nhgeduvn-my.sharepoint.com/:i:/r/personal/toanum2006003_student_hiu_vn/Documents/image/logoFinal.png?csf=1&web=1&e=UBeagU"
                            alt="logo"
                        />
                    </Link>
                </div>

                {/* Search */}
                <Search />

                <div className={cx('actions')}>
                    {isLoggedIn ? ( // nếu có account thì sẽ hiện thị phần jsx sau đây
                        <>
                            <div className={cx('admin')}>
                                {userData.role === 2 ? (
                                    <>
                                        <Tippy
                                            arrow
                                            interactive
                                            render={(attrs) => (
                                                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                                                    <PopperWrapper>
                                                        <ul className={cx('menu-user')}>
                                                            <li className={cx('menu-user-item')}>
                                                                <Link
                                                                    className={cx('menu-user-item-children')}
                                                                    to={config.routes.quanlybaixe}
                                                                >
                                                                    <FontAwesomeIcon
                                                                        className={cx('menu-user-item-children-icon')}
                                                                        icon={faLandmark}
                                                                    />
                                                                    Quản lý bãi xe
                                                                </Link>
                                                            </li>
                                                            <li className={cx('menu-user-item')}>
                                                                <Link
                                                                    className={cx('menu-user-item-children')}
                                                                    to={config.routes.thembaixe}
                                                                >
                                                                    <FontAwesomeIcon
                                                                        className={cx('menu-user-item-children-icon')}
                                                                        icon={faCar}
                                                                    />
                                                                    Thêm bãi xe
                                                                </Link>
                                                            </li>
                                                            <li className={cx('menu-user-item')}>
                                                                <Link
                                                                    className={cx('menu-user-item-children')}
                                                                    to={config.routes.quanlytaikhoan}
                                                                >
                                                                    <FontAwesomeIcon
                                                                        className={cx('menu-user-item-children-icon')}
                                                                        icon={faUser}
                                                                    />
                                                                    Quản lý tài khoản
                                                                </Link>
                                                            </li>
                                                            <li className={cx('menu-user-item')}>
                                                                <Link
                                                                    className={cx('menu-user-item-children')}
                                                                    to={config.routes.quanlyoguixe}
                                                                >
                                                                    <FontAwesomeIcon
                                                                        className={cx('menu-user-item-children-icon')}
                                                                        icon={faRectangleList}
                                                                    />
                                                                    Quản lý ô gửi xe
                                                                </Link>
                                                            </li>
                                                            <li className={cx('menu-user-item')}>
                                                                <Link
                                                                    className={cx('menu-user-item-children')}
                                                                    to={config.routes.themoguixe}
                                                                >
                                                                    <FontAwesomeIcon
                                                                        className={cx('menu-user-item-children-icon')}
                                                                        icon={faRectangleList}
                                                                    />
                                                                    Thêm ô gửi xe
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </PopperWrapper>
                                                </div>
                                            )}
                                        >
                                            <div className={cx('wrapper-action-btn')}>
                                                <button className={cx('action-btn')}>
                                                    <FontAwesomeIcon icon={faPlus} />
                                                    <span>Quản lý</span>
                                                </button>
                                            </div>
                                        </Tippy>

                                        <Tippy
                                            interactive
                                            render={(attrs) => (
                                                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                                                    <PopperWrapper>
                                                        <ul className={cx('menu-user')}>
                                                            <li className={cx('menu-user-item')}>
                                                                <Link
                                                                    className={cx('menu-user-item-children')}
                                                                    to={config.routes.chinhsuataikhoan}
                                                                >
                                                                    <FontAwesomeIcon
                                                                        className={cx('menu-user-item-children-icon')}
                                                                        icon={faUser}
                                                                    />
                                                                    Xem hồ sơ
                                                                </Link>
                                                            </li>
                                                            <li className={cx('menu-user-item')}>
                                                                <Link
                                                                    className={cx('menu-user-item-children')}
                                                                    to={'/'}
                                                                >
                                                                    <FontAwesomeIcon
                                                                        className={cx('menu-user-item-children-icon')}
                                                                        icon={faGear}
                                                                    />
                                                                    Cài đặt
                                                                </Link>
                                                            </li>
                                                            <li className={cx('menu-user-item')}>
                                                                <Link
                                                                    className={cx('menu-user-item-children')}
                                                                    to={'/'}
                                                                >
                                                                    <FontAwesomeIcon
                                                                        className={cx('menu-user-item-children-icon')}
                                                                        icon={faQuestionCircle}
                                                                    />
                                                                    Phản hồi và trợ giúp
                                                                </Link>
                                                            </li>

                                                            <li className={cx('menu-user-item-logout')}>
                                                                <button
                                                                    className={cx('action-btn')}
                                                                    onClick={() => dispatch(actions.logout())}
                                                                >
                                                                    <FontAwesomeIcon
                                                                        className={cx('action-icon-btn')}
                                                                        icon={faRightFromBracket}
                                                                    />
                                                                    Đăng xuất
                                                                </button>
                                                            </li>
                                                        </ul>
                                                    </PopperWrapper>
                                                </div>
                                            )}
                                        >
                                            <Image
                                                src="https://scontent.fsgn2-3.fna.fbcdn.net/v/t39.30808-6/325962172_710016603900310_1000446009782296543_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=U69_jfQdLb0AX_R-UWh&_nc_oc=AQn-Sx2KOi5Mfglu0RpXxGj7Cy1rbO0-04uBbFxGPglJJZmrIDdcUOOT06y17zDDHz8&_nc_ht=scontent.fsgn2-3.fna&oh=00_AfCfLbjv8F1WZtflobHDU6xNcHALyxFy8g3mf1XpO-E2Tw&oe=646DEECA"
                                                className={cx('user-avatar')}
                                                alt=""
                                            />
                                        </Tippy>
                                    </>
                                ) : (
                                    <>
                                        <Tippy
                                            interactive
                                            render={(attrs) => (
                                                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                                                    <PopperWrapper>
                                                        <ul className={cx('menu-user')}>
                                                            <li className={cx('menu-user-item')}>
                                                                <Link
                                                                    className={cx('menu-user-item-children')}
                                                                    to={'/'}
                                                                >
                                                                    <FontAwesomeIcon
                                                                        className={cx('menu-user-item-children-icon')}
                                                                        icon={faUser}
                                                                    />
                                                                    Xem hồ sơ
                                                                </Link>
                                                            </li>
                                                            <li className={cx('menu-user-item')}>
                                                                <Link
                                                                    className={cx('menu-user-item-children')}
                                                                    to={'/'}
                                                                >
                                                                    <FontAwesomeIcon
                                                                        className={cx('menu-user-item-children-icon')}
                                                                        icon={faGear}
                                                                    />
                                                                    Cài đặt
                                                                </Link>
                                                            </li>
                                                            <li className={cx('menu-user-item')}>
                                                                <Link
                                                                    className={cx('menu-user-item-children')}
                                                                    to={'/'}
                                                                >
                                                                    <FontAwesomeIcon
                                                                        className={cx('menu-user-item-children-icon')}
                                                                        icon={faQuestionCircle}
                                                                    />
                                                                    Phản hồi và trợ giúp
                                                                </Link>
                                                            </li>

                                                            <li className={cx('menu-user-item-logout')}>
                                                                <button
                                                                    className={cx('action-btn')}
                                                                    onClick={() => dispatch(actions.logout())}
                                                                >
                                                                    <FontAwesomeIcon
                                                                        className={cx('action-icon-btn')}
                                                                        icon={faRightFromBracket}
                                                                    />
                                                                    Đăng xuất
                                                                </button>
                                                            </li>
                                                        </ul>
                                                    </PopperWrapper>
                                                </div>
                                            )}
                                        >
                                            <Image
                                                src="C:\Users\Admin\OneDrive - nhg.vn\image\logoFinal.png"
                                                className={cx('user-avatar')}
                                                alt=""
                                            />
                                        </Tippy>
                                    </>
                                )}
                            </div>
                        </>
                    ) : (
                        // còn nếu không có account login thì sẽ là phần jsx sau đây được hiện thị
                        <>
                            <Button text href={config.routes.register}>
                                Đăng ký
                            </Button>
                            <Button primary href={config.routes.login}>
                                Đăng nhập
                            </Button>

                            <Tippy
                                interactive
                                render={(attrs) => (
                                    <PopperWrapper>
                                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                                            <ul className={cx('menu-user')}>
                                                <li className={cx('menu-user-item')}>
                                                    <Link className={cx('menu-user-item-children')} to={'/'}>
                                                        <FontAwesomeIcon
                                                            className={cx('menu-user-item-children-icon')}
                                                            icon={faQuestionCircle}
                                                        />
                                                        Phản hồi và trợ giúp
                                                    </Link>
                                                </li>
                                                <li className={cx('menu-user-item')}>
                                                    <Link className={cx('menu-user-item-children')} to={'/'}>
                                                        <FontAwesomeIcon
                                                            className={cx('menu-user-item-children-icon')}
                                                            icon={faMoon}
                                                        />
                                                        Chế độ tối
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </PopperWrapper>
                                )}
                            >
                                <button className={cx('more-btn')}>
                                    <FontAwesomeIcon icon={faEllipsisVertical} />
                                </button>
                            </Tippy>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
}

export default Header;
