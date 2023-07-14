import classNames from 'classnames/bind';
import { memo } from 'react';

import styles from './Input.module.scss';

const cx = classNames.bind(styles);

function Input({ label, value, setValue, type, invalidFields, setInvalidFields, keyPayload }) {
    const handleChange = (e) => setValue((prev) => ({ ...prev, [keyPayload]: e.target.value }));
    // truyền thêm type vào để nhận biết khi thay đổi input nào thì sẽ nhận giá trị thay đổi ở ô input đó
    //vd: type là phone thì sẽ nhận giá trị là phone thay đổi

    return (
        <div className={cx('login-content')}>
            <label>{label}</label> <br />
            <input
                type={type || 'text'}
                value={value}
                placeholder={`Nhập ${label.toLowerCase()}`}
                onChange={handleChange}
                onFocus={() => setInvalidFields([])} //reset lỗi khi focus dô input thì lỗi bị mất
            />
            {invalidFields.length > 0 && invalidFields.some((i) => i.name === keyPayload) && (
                <small className={cx('erro-type')}>{invalidFields.find((i) => i.name === keyPayload)?.message}</small>
            )}
        </div>
    );
}

export default memo(Input);
