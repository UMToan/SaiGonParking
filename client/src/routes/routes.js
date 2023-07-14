//Layouts
import { HeaderOnly } from '../layouts';
import config from '../config';

import Home from '../pages/Home';
import DistrictMot from '../pages/DistrictMot';
import DistrictHai from '../pages/DistrictHai';
import DistrictBa from '../pages/DistrictBa';
import DistrictNam from '../pages/DistrictNam';
import DistrictSau from '../pages/DistrictSau';
import DistrictBay from '../pages/DistrictBay';
import DistrictMuoi from '../pages/DistrictMuoi';
import DistrictMuoiMot from '../pages/DistrictMuoiMot';
import DistrictGoVap from '../pages/DistrictGoVap';
import DistrictBinhThanh from '../pages/DistrictBinhThanh';
import DistrictPhuNhuan from '../pages/DistrictPhuNhuan';
import Upload from '../pages/Upload';

import Login from '../pages/Login';
import Register from '../pages/Login/Register';
import DetailDistrict from '../pages/DetailDistrict';
import AddBaiXe from '../pages/AddBaiXe';
import * as ManagerBaiXe from '../pages/ManagerBaiXe';
import EditUser from '../pages/EditUser';
import ManagerUser from '../pages/ManagerUser';
import EditBaiXe from '../pages/EditBaiXe';
import * as Ticket from '../pages/TicketParking';
import * as ManagerSlotParking from '../pages/ManagerSlotParking';

//khoong can login van co the truy cap duoc
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.quan1, component: DistrictMot },
    { path: config.routes.quan2, component: DistrictHai },
    { path: config.routes.quan3, component: DistrictBa },
    { path: config.routes.quan5, component: DistrictNam },
    { path: config.routes.quan6, component: DistrictSau },
    { path: config.routes.quan7, component: DistrictBay },
    { path: config.routes.quan10, component: DistrictMuoi },
    { path: config.routes.quan11, component: DistrictMuoiMot },
    { path: config.routes.quangovap, component: DistrictGoVap },
    { path: config.routes.quanbinhthanh, component: DistrictBinhThanh },
    { path: config.routes.quanphunhuan, component: DistrictPhuNhuan },
    { path: config.routes.upload, component: Upload, layout: HeaderOnly }, //thằng nào có layout: null thì sẽ không có layout mặc định
    { path: config.routes.login, component: Login, layout: null },
    { path: config.routes.register, component: Register, layout: null },

    //linkAddBaiXe
    { path: config.routes.thembaixe, component: AddBaiXe, layout: null },

    //link bai xxe
    { path: config.routes.chitietbaixe, component: DetailDistrict, layout: null },
    { path: config.routes.chitietall, component: DetailDistrict, layout: null },

    //link phieu
    { path: config.routes.thembaixe, component: AddBaiXe, layout: HeaderOnly },

    //manager
    { path: config.routes.quanlybaixe, component: ManagerBaiXe.ManagerBaiXe, layout: null },
    { path: config.routes.chinhsuabaixe, component: EditBaiXe, layout: null },
    { path: config.routes.quanlytaikhoan, component: ManagerUser, layout: null },
    { path: config.routes.chinhsuataikhoan, component: EditUser, layout: null },

    //phieu gui xe
    { path: config.routes.phieuguixe, component: Ticket.TicketParking, layout: null },

    //ô gui xe
    { path: config.routes.quanlyoguixe, component: ManagerSlotParking.ManagerSlotParking, layout: null },
    { path: config.routes.themoguixe, component: ManagerSlotParking.AddSlotParking, layout: null },
];

//can loin moi truy cap duoc
const privateRoutes = [];

export { publicRoutes, privateRoutes };
