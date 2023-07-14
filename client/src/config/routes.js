const routes = {
    home: '/',
    quan1: '/quan-1',
    quan2: '/quan-2',
    quan3: '/quan-3',
    quan5: '/quan-5',
    quan6: '/quan-6',
    quan7: '/quan-7',
    quan10: '/quan-10',
    quan11: '/quan-11',
    quanbinhthanh: '/quan-binh-thanh',
    quangovap: '/quan-go-vap',
    quanphunhuan: '/quan-phu-nhuan',
    login: '/login',
    register: '/register',

    thembaixe: '/them-bai-xe',

    chitietbaixe: '/chi-tiet/:TenBaiXe/:idBaixe',
    chitiet: '/chi-tiet/',
    chitietall: '/chi-tiet/*',

    quanlybaixe: '/quan-ly-bai-xe',
    chinhsuabaixe: '/chinh-sua-bai-xe',

    quanlytaikhoan: '/quan-ly-tai-khoan',
    chinhsuataikhoan: '/chinh-sua-tai-khoan',

    phieuguixe: '/phieu-gui-xe',

    quanlyoguixe: '/quan-ly-o-gui-xe',
    themoguixe: '/them-o-gui-xe',
};

export default routes;

export const formatVietnameseToString = (keyword) => {
    return keyword
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .split(' ')
        .join('-');
};
