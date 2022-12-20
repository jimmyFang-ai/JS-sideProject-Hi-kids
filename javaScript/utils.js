// 數字轉換千分位函式
function tothousands(num) {
    let parts = num.toString().split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return parts.join('.');
};

// 亂數產生器函式
function getRandom(num) {
    return Math.floor(Math.random() * num);
};



// 計算總金額
function calcTotalPrice(data) {
    return tothousands(data.reduce((acc, cur) => acc + cur, 0));
};


// 提示訊息  sweetAlert2
function swalMassage(title, icon, time) {

    // success 成功, error 錯誤, warning 驚嘆號 , info 說明
    swal.fire({
        toast: true,
        position: 'top-end',
        title: title,
        icon: icon,
        timer: time,
        showConfirmButton: false,
    });
};


// 日期格式處理
function timeDate(time) {
    // 時間要轉為毫秒要 13位數
    const timeStamp = new Date(time);
    return `${timeStamp.getFullYear()} / ${timeStamp.getMonth() + 1} / ${timeStamp.getDate()}`;
};




export { tothousands, getRandom, swalMassage, calcTotalPrice, timeDate };