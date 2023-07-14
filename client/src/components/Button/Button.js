import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    primary = false,
    small = false,
    outline = false,
    text = false,
    btnLogin = false,
    disabled = false,
    children,
    onClick,
}) {
    let Comp = 'button';
    const props = {
        onClick,
    };

    //remove event listener khi btn là disabled
    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }

    if (to) {
        // nếu là to thì sẽ dùng link nội bộ của react router dom
        props.to = to;
        Comp = Link;
    } else if (href) {
        // nếu props là href thì sẽ là link ngoài
        props.href = href;
        Comp = 'a';
    }

    const classes = cx('wrapper', {
        primary,
        outline, // outline là button đặt chỗ gửi xe
        small,
        text,
        btnLogin,
        disabled, // sử dụng cho button không click được
    }); // khi tuyển props vào ở đây thì boolean sẽ được chuyển thành true là sử dụng được

    return (
        <Comp className={classes} {...props}>
            {' '}
            {/* ...props là rải các thành phần của props đúng điều kiện vào trong làm element của thẻ */}
            <span>{children}</span>
        </Comp>
    );
}

Button.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    primary: PropTypes.bool,
    small: PropTypes.bool,
    outline: PropTypes.bool,
    text: PropTypes.bool,
    btnLogin: PropTypes.bool,
    disabled: PropTypes.bool,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
};

export default Button;
