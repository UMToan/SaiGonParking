import PropTypes from 'prop-types';
import { useState, forwardRef } from 'react';
import images from '../assets/images';

const Image = forwardRef(({ src, alt, ...props }, ref) => {
    //ref là do forwardRef sinh ra
    // eslint-disable-next-line jsx-a11y/alt-text
    const [fallback, setFallback] = useState('');

    const handleError = () => {
        setFallback(images.noimage);
    };

    return <img ref={ref} src={fallback || src} alt={alt} {...props} onError={handleError} />;
    //nếu src bị lỗi thì fallback sẽ được lấy và hàm handleError sẽ đưuọc gọi
});

Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
};

export default Image;
