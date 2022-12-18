







































//       // 初始化
//         function init() {
//             // 取得資料
// getBookmarksData();
//         };
//         init()

// //   // 取得我的最愛資料
// function getBookmarksData() {
//     // ${BASE_URL}/bookmarks?userId=2&_expand=course
//     axios.get(`${DOMAINS}/users/2/bookmarks?_expand=course`)
//         .then((res) => {
//             const { data } = res;
//             console.log(data);
//             // renderData(data);
//         })
//         .catch((error) => {
//             console.log(error);
//         })
// };


//  // 新增資料
//         function postBookmarksData() {
//         // ${BASE_URL}/bookmarks
//             axios.post(`${DOMAINS}/bookmarks`, {
//                 "courseId": 5,
//                 "userId": 3,
//             })
//                 .then((res) => {
//                     console.log(res);
//                     getBookmarksData();
//                 })
//                 .catch((error) => {
//                     console.log(error);
//                 })
//         }

//         // 新增資料
//         postBookmarksData();


//        // 渲染畫面
//         function renderData(data) {
//             list.innerHTML = data.map((item) => {
//                 const { course } = item;
//                 return `<li class="col mb-3">
//         <div class="card rounded-2 p-3">
//             <div class="ratio ratio-4x3">
//                 <img class="img-fluid" src="${course.imageUrl}">
//             </div>

//             <div class="card-body px-0">
//                 <h5 class="card-title fw-bold">${course.title}</h5>
//                 <p class="card-text mb-2">${course.category}</p>
//                 <p class="mb-2">NT$ ${course.price}</p>
//                 <a href="#" class="btn btn-primary">查看更多 + </a>
//             </div>
//         </div>
//     </li>`
//             }).join('');
//         };




// //     // 註冊功能(不能註冊同一個 Email ，會被擋掉)
//     function signup() {
// //     ${BASE_URL}/signup

//         axios.post(`https://json-server-vercel-test.vercel.app/signup`,
//             {
//                 "name": "666",
//                 "email": "666@gmail.com",
//                 "password": "111111"
//             }
//         )
//             .then((res) => {
//                 console.log(res);
//                 // 狀態碼為 201，成功
//                 if (res.status === 201) {
//                     const { accessToken, user } = res.data;
//                     // saveUserToLocalForSignUp(accessToken, user);
//                     console.log(`${user.email} 註冊成功`);

//                     // 導到登入頁
//                     // window.location.replace('/login.html');
//                 };
//             })
//             .catch((error) => {
//                 const { response } = error;
//                 console.log(response.data);
//             })
//     };
//     signup();


//     // 儲存 token 與 userId
//     function saveUserToLocalForSignUp(accessToken, user) {
//         // 登入後將 token 與 userId  寫入 local storage
//         localStorage.setItem('token', accessToken);
//         localStorage.setItem('userId', user.id);
//     };


//     // 登入功能(token 有時效性)
//     function login() {
//         axios.post(`${BASE_URL}/login`,
//             {
//                 "email": "666@gmail.com",
//                 "password": "111111"
//             }
//         )
//             .then((res) => {
//                 console.log(res);

//                 if (res.status === 200) {
//                     const { accessToken, user } = res.data;
//                     saveUserToLocalForLogin(accessToken, user);
//                     console.log(`${user.email} 您好，已成功登入`);


//                     // 判斷是 role 是 user 還是 admin
//                     // let redirectPath = '/';
//                     // // const isAdmin = response.data?.user?.role?.includes('admin');
//                     // const isAdmin = response.data?.user?.role === 'admin';
//                     // if (isAdmin) {
//                     //     redirectPath = 'admin/desk.html';
//                     // }


//                     //  0.15 秒後 導到首頁
//                     // setTimeout(() => {
//                     //     console.log('Redirect!');
//                     //     window.location.replace(redirectPath);
//                     // }, 150);
//                 };

//             })
//             .catch((error) => {
//                 console.log(error);
//             })
//     };

//     login();

//     // 儲存 token 與 userId
//     function saveUserToLocalForLogin(accessToken, user) {
//         // 登入後將 token 與 userId  寫入 local storage
//         localStorage.setItem('token', accessToken);
//         localStorage.setItem('userId', user.id);
//         localStorage.setItem('niceName', user.name);
//     };


//     // 確認是否登入
//     function localLoginChecker() {
//         console.log('localLoginChecker!');
//         // const AUTH = `Bearer ${localStorage.getItem('token')}`;
//         const localJWT = localStorage.getItem('token');
//         // console.log(localJWT);

//         if (localJWT) {
//             const nickname = localStorage.getItem('niceName');
//         };
//         /* end of IF-(localJWT) */
//     };

//     localLoginChecker();



//     // 更新密碼(路徑為 users 資料裡面的使用者密碼)
//     // function updatePassword() {
//     //     axios.patch(`${BASE_URL}/users/2`,
//     //         {
//     //             "password": "111111"
//     //         }
//     //     )
//     //         .then((res) => {
//     //             console.log(res.data);
//     //             // const { accessToken, user } = res.data;
//     //             // console.log('accessToken :', accessToken);
//     //             // console.log(`${user.email} 您好，已成功登入`);
//     //         })
//     //         .catch((error) => {
//     //             console.log(error);
//     //         })
//     // };

//     // updatePassword();