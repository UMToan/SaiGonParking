import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { faCircleXmark, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useState, useRef, useEffect } from 'react';

import { Wrapper as PopperWrapper } from './Popper';
import SearchItem from './SearchItem';
import { getApibaixeSearch } from '../../../services/baixe';
import { Link } from 'react-router-dom';
import config from '../../../config';
import { formatVietnameseToString } from '../../../config/routes';

const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');

    const [searchResult, setSearchResult] = useState([]);

    const inputRef = useRef(); // sử dụng useRef để lấy đưuọc dom element của thằng input

    const handleClear = () => {
        // khi click vào icon clear thì đồng thời
        setSearchValue(''); // đổi trạng thái của ô input thành chuỗi trỗng
        inputRef.current.focus(); // và focus con trỏ chuột lại ô input
    };

    const handleChange = (e) => {
        // hàm xử lý không có space đầu tiên không input search
        const searchValue = e.target.value; // đặt biến gán = giá trị của ô input
        if (!searchValue.startsWith(' ')) {
            // nếu biến gán không bắt đầu bằng space
            setSearchValue(searchValue); // thì sẽ tiến hành search
        } // còn không thì sẽ không space đưuọc
    };

    const name = searchValue;

    useEffect(() => {
        if (!setSearchValue) return;

        getApibaixeSearch(name).then((res) => {
            // console.log(res.data);
            setSearchResult(res.data.baixe);
        });
    }, [searchValue, name]);

    return (
        <div className={cx('wrapper-search')}>
            <div className={cx('search')}>
                <input
                    ref={inputRef} // bỏ cái useRef vào props
                    value={searchValue}
                    placeholder="search your parking"
                    className={cx('input-search')}
                    onChange={handleChange} // khi value của search thay đổi thì sẽ thay đổi cái state
                />
                {!!searchValue && ( // {!!searchValue có nghĩa là chuyển searchValue thành boolean và khi có searchValue thì mới hiện icon clear}
                    <button className={cx('clear')} onClick={handleClear}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}

                {/* <FontAwesomeIcon className={cx('loading')} icon={faSpinner} /> */}
                <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
            {searchValue === '' ? (
                <></>
            ) : (
                <div className={cx('search-title-aaa')}>
                    <PopperWrapper>
                        <h4 className={cx('search-title')}>Bãi xe</h4>
                        {searchResult.length > 0 &&
                            searchResult.map((item) => (
                                <div>
                                    <SearchItem>
                                        <Link
                                            to={`${config.routes.chitiet}${formatVietnameseToString(item.TenBaiXe)}/${
                                                item.id
                                            }`}
                                        >
                                            <div className={cx('info')}>
                                                <h4 className={cx('name')}>{item.TenBaiXe}</h4>
                                            </div>
                                        </Link>
                                        <span className={cx('title-small')}>{item.ViTriBaiXe}</span>
                                    </SearchItem>
                                </div>
                            ))}
                    </PopperWrapper>
                </div>
            )}
        </div>

        // <Tippy
        //     interactive
        //     visible={searchResult.length > 0}
        //     render={(attrs) => (
        //         <div className={cx('search-result')} tabIndex="-1" {...attrs}>
        //             <PopperWrapper>
        //                 <h4 className={cx('search-title')}>Bãi xe</h4>
        //                 {console.log(searchResult.baixe.length)}
        //                 {searchResult.baixe.length > 0 &&
        //                     searchResult.baixe.map((item) => (
        //                         <div>
        //                             <SearchItem>{item.TenBaiXe}</SearchItem>
        //                         </div>
        //                     ))}
        //             </PopperWrapper>
        //         </div>
        //     )}
        // >
        //     <div className={cx('search')}>
        //         <input
        //             ref={inputRef} // bỏ cái useRef vào props
        //             value={searchValue}
        //             placeholder="search your parking"
        //             className={cx('input-search')}
        //             onChange={handleChange} // khi value của search thay đổi thì sẽ thay đổi cái state
        //         />
        //         {!!searchValue && ( // {!!searchValue có nghĩa là chuyển searchValue thành boolean và khi có searchValue thì mới hiện icon clear}
        //             <button className={cx('clear')} onClick={handleClear}>
        //                 <FontAwesomeIcon icon={faCircleXmark} />
        //             </button>
        //         )}

        //         {/* <FontAwesomeIcon className={cx('loading')} icon={faSpinner} /> */}
        //         <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
        //             <FontAwesomeIcon icon={faMagnifyingGlass} />
        //         </button>
        //     </div>
        // </Tippy>
    );
}

export default Search;
