// 引入 axios 
import "https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js";


//  本地端
// const BASE_URL = `http://localhost:10000`;

// Render 測試
const DOMAINS = `https://demo-test.onrender.com`;

// user 使用者
const userRequest = axios.create({
  baseURL: DOMAINS,
  headers: {
    'Content-Type': 'application/json',
  }
});



// 測試有登入後 將 token 取出來，在所有的headers ['Authorization'] 加入 token
userRequest.interceptors.request.use(
  (config) => {
    // 從 localStorage 將 token 取出
    const token = localStorage.getItem('token');

    // 如果 token 存在的話，則帶入到 headers 當中
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (err) => Promise.reject(err),
);



// 課程資訊 API
// 所有課程資料
export const apiGetProducts = () => userRequest.get('/courses');
// 單一課程資料
export const apiGetProduct = (id) => userRequest.get(`/courses/${id}`);




// user 相關的 API
// 註冊
export const apiSignup = (data) => userRequest.post('/signup', data);
// 登入
export const apiLogin = (data) => userRequest.post('/login', data);
// 取的使用者資訊(需要登入，有權限)
export const apiGetUserInfo = (id) => userRequest.get(`/600/users/${id}`);



// 購物車 API
export const apiGetCarts = (userId) => userRequest.get(`/600/users/${userId}/carts?_expand=course`);
// 新增產品到購物車 (需要登入，有權限)
export const apiAddCart = (data) => userRequest.post(`/600/carts`, data);
// 更新購物車產品數量
export const apiUpdateCart = (id, data) => userRequest.patch(`/600/carts/${id}`, data);
// 移除購物車單筆課程
export const apiRemoveCartItem = (id) => userRequest.delete(`/600/carts/${id}`);


// // 收藏 API 
// 取得所有收藏資料
export const apiGetBookmarks = (userId) => userRequest.get(`/600/users/${userId}/bookmarks?_expand=course`);
// 取得單一收藏資料
export const apiGetBookmark = (userId, id) => userRequest.get(`/600/users/${userId}/bookmarks?courseId=${id}`);
// 新增收藏資料(需要登入，有權限)
export const apiAddBookmarks = (id, data) => userRequest.post(`/600/courses/${id}/bookmarks`, data);
// 移除收藏資料
export const apiRemoveBookmarks = (id) => userRequest.delete(`/600/bookmarks/${id}`);




// 訂單
// 取得訂單資料
export const apiGetOrder = (userId) => userRequest.get(`/600/users/${userId}/orders`);
// 送出訂單
export const apiSendOrder = (userId, data) => userRequest.post(`/600/users/${userId}/orders`, data);









