// 引入 axios 
import "https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js";

import { getLoggedID } from './renderUserTemplate.js';


//  本地端
// const BASE_URL = `http://localhost:10000`;

// Render 測試
const DOMAINS = `https://demo-test.onrender.com`;

// token
let AUTH = null;
// 確認有使用者登入後才把 token 取出來，夾帶到 headers 內
if (getLoggedID) {
    AUTH = `Bearer ${localStorage.getItem('token')}`;
    // console.log(AUTH);
};
console.log(AUTH);






// visitor 參訪者(無權限)
const visitorRequest = axios.create({
    baseURL: DOMAINS,
    headers: {
        'Content-Type': 'application/json',
    }
});


// user 使用者(有權限)
const userRequest = axios.create({
    baseURL: DOMAINS,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': AUTH
    }
});


// 我的最愛相關
// const bookmarksRequest = axios.create({
//     baseURL: DOMAINS,
//     headers: {
//         'Content-Type': 'application/json',
//         'Authorization': AUTH
//     }
// });



// 課程資訊 API
// 所有課程資料
export const apiGetProducts = () => visitorRequest.get('/courses');
// 單一課程資料
export const apiGetProduct = (id) => visitorRequest.get(`/courses/${id}`);




// user 相關的 API
// 註冊
export const apiSignup = (data) => visitorRequest.post('/signup', data);
// 登入
export const apiLogin = (data) => visitorRequest.post('/login', data);
// 取的使用者資訊(需要登入，有權限)
export const apiGetUserInfo = (id) => userRequest.get(`/600/users/${id}`);



// 購物車 API
// 新增產品到購物車 (需要登入，有權限)
export const apiAddCart = (id, data) => userRequest.post(`/600/users/${id}/carts`, data);

// // 收藏 API 
// 取得所有收藏資料
export const apiGetBookmarks = (id) => userRequest.get(`/600/users/${id}/bookmarks?_expand=course`);
// 取得單一收藏資料
export const apiGetBookmark = (userId,id) => userRequest.get(`/600/users/${userId}/bookmarks?courseId=${id}`);
// 新增收藏資料(需要登入，有權限)
export const apiAddBookmarks = (id, data) => userRequest.post(`/600/courses/${id}/bookmarks`, data);
// 移除收藏資料
export const apiRemoveBookmarks = (id) => userRequest.delete(`/600/bookmarks/${id}`);

// 訂單







// 後台管理者(有權限)
// 訂單資訊 API


// 產品資訊 API




// 前台使用者
// const userRequest = axios.create({
//     baseURL: 'https://livejs-api.hexschool.io/api/livejs/v1/customer/testwoworoom/',
//     headers: {
//         'Content-Type': 'application/json',
//     }
// });

// // 後台管理者
// const adminRequest = axios.create({
//     baseURL: 'https://livejs-api.hexschool.io/api/livejs/v1/admin/testwoworoom',
//     headers: {
//         'Content-Type': 'application/json',
//         'Authorization': auth_token,
//     }
// });


// // 前台
// // 產品 API
// export const apiGetProducts = () => userRequest.get('/products');
// // 購物車 API
// export const apiGetCarts = () => userRequest.get('/carts');
// export const apiDeleteAllCarts = () => userRequest.delete('/carts');
// export const apiAddCart = (data) => userRequest.post('/carts',data);
// export const apiUpdateCart = (data) => userRequest.patch('/carts',data);
// export const apiDeleteCart = (id) => userRequest.delete(`/carts/${id}`);
// export const apiAddOrder = (data) => userRequest.post('/orders',data);


// // 後台 - 訂單 API
// export const apiGetOrders = () => adminRequest.get('/orders');
// export const apiDeleteAllOrders = () => adminRequest.delete(`/orders`);
// export const apiDeleteOrder = (id) => adminRequest.delete(`/orders/${id}`);
// export const apiUpdateOrder  = (data) => adminRequest.put('/orders', data);
