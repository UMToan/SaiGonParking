const validateFrom = (payload, setInvalidFields) => {
    let invalids = 0;
    let fields = Object.entries(payload); //chuyển object thành mảng
    // trong 1 mảng sẽ có 1 cặp key value
    fields.forEach((item) => {
        if (item[1] === '') {
            //item[1] là giá trị của cái value
            setInvalidFields((prev) => [
                ...prev,
                {
                    name: item[0], //item[0] là kêy
                    message: 'Trường này bị bỏ trống!!',
                },
            ]);
            invalids++;
        }
    });

    fields.forEach((item) => {
        switch (item[0]) {
            case 'matkhau':
                if (item[1] && item[1].length < 6) {
                    setInvalidFields((prev) => [
                        ...prev,
                        {
                            name: item[0],
                            message: 'Mật khẩu phải dài hơn 6 kí tự',
                        },
                    ]);
                    invalids++;
                }
                break;
            case 'sdt':
                if (!+item[1] && typeof item[1] !== 'undefined') {
                    //+item[1] dấu + để chuyển cái value thành kiểu số
                    setInvalidFields((prev) => [
                        ...prev,
                        {
                            name: item[0],
                            message: 'Số điện thoại không hợp lệ',
                        },
                    ]);
                    invalids++;
                }
                break;
            case 'MaKhuVuc':
                if ((item[1] && item[1].length < 1) || item[1] !== item[1].toUpperCase()) {
                    setInvalidFields((prev) => [
                        ...prev,
                        {
                            name: item[0],
                            message: 'Hãy nhập kí tự đầu của Quận và tên Quận (Q1, BT)',
                        },
                    ]);
                    invalids++;
                }
                break;
            case 'SDTBaiXe':
                if (!+item[1] && typeof item[1] !== 'undefined') {
                    setInvalidFields((prev) => [
                        ...prev,
                        {
                            name: item[0],
                            message: 'Số điện thoại không hợp lệ',
                        },
                    ]);
                    invalids++;
                }
                break;

            default:
                break;
        }
    });

    return invalids;
};

export default validateFrom;
