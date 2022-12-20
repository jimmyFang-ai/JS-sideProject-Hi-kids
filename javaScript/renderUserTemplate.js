
// 匯入 共用 API
import * as api from './api.js';
const userMenu = document.querySelector('#user-menu');

// 取出登入後的使用者 id
export function getLoggedID() {
    return localStorage.getItem('userId') || 0;
};


// 渲染會員選單
function templateOfUserMenu(user, template = '') {
    console.log(user);
    // console.log('me:::', JSON.stringify(user, null, 2));
    const isAdmin = user?.role === 'admin';
    if (isAdmin) {
        template = `
        <li class="me-lg-3">
            <a href="./admin/dashboard.html" class="btn px-3 me-2">
              前往後台
            </a>
        </li>
      `;
    }
    /* end of IF-(isAdmin) */

    template += `
    <li class="me-lg-3">
         <a class="custom-cart-btn  p-0" aria-current="page" href="./cart.html">
          <span class="material-icons-round cart-icon">
            shopping_cart
           </span>
         </a>
     </li>
  
     <li class="me-lg-3">
     <a class="custom-cart-btn  p-0 active" aria-current="page" href="./bookmarks.html">
     <span class="material-icons-round favorite-icon">
           favorite
     </span>
     </a>
    </li>
  
    <li class="me-lg-3">
       <strong class="d-none d-sm-block ms-1 px-1">
       ${user.name || 'HI!'}  您好!
       </strong>
   </li>
  
      <li class="nav-item">
          <a href="#" class="btn btn-primary px-3" id="logout-btn">
            登出
          </a>
      </li>`;

    return template;
};


// 取得會員資料
function getUserData() {
    const userId = getLoggedID();
    api.apiGetUserInfo(userId)
        .then(res => {
            if (res.status === 200) {
                console.log('OK!');
                document.querySelector('#guest-menu').classList.toggle('d-none');

                // 渲染使用者資料選單
                userMenu.innerHTML = templateOfUserMenu(res.data);
            }
        })
        .catch(error => {
            console.log(error);

            if (error?.response?.status === 401) {
                console.log('401');
                localStorage.clear();
            };

        });
};



// 會員登出功能
function logout(e) {
    // console.log(e.target);
    // console.log(e.target.id !== 'logout-btn');

    // 確認點擊到是否是登出按鈕
    if (e.target.id !== 'logout-btn') return;
    localStorage.clear();

    setTimeout(() => {
        window.location.replace('/');
    }, 300);
};

function init() {
    if (getLoggedID()) {
        getUserData();
    };

    userMenu.addEventListener('click', (e) => logout(e));
};
init();
