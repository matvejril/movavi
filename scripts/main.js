window.onload = function() {
    var btnToEasy = document.querySelectorAll(".to-easy");
    var btnToFull = document.querySelectorAll(".to-full");
    btnToEasy.forEach(function (item) {
        item.addEventListener('click', toEasyMode);
    });
    btnToFull.forEach(function (item) {
        item.addEventListener('click', toFullMode);
    });
    btnsChange();
};

window.onresize = function() {
    btnsChange();
};

function toEasyMode() {
    var btnCreateEasy = document.querySelector(".btn_create-easy");
    var btnCreateFull = document.querySelector(".btn_create-full");
    var easyMode = document.querySelector(".sm-guide-step_easy-mode");
    var fullMode = document.querySelector(".sm-guide-step_full-mode");
    if (!btnCreateEasy.classList.contains('btn_create-active')) {
        btnCreateEasy.classList.add('btn_create-active');
        btnCreateFull.classList.remove('btn_create-active');
        fullMode.style.display = 'none';
        easyMode.style.display = 'block';
    }
}

function toFullMode() {
    var btnCreateEasy = document.querySelector(".btn_create-easy");
    var btnCreateFull = document.querySelector(".btn_create-full");
    var easyMode = document.querySelector(".sm-guide-step_easy-mode");
    var fullMode = document.querySelector(".sm-guide-step_full-mode");
    if (!btnCreateFull.classList.contains('btn_create-active')) {
        btnCreateFull.classList.add('btn_create-active');
        btnCreateEasy.classList.remove('btn_create-active');
        easyMode.style.display = 'none';
        fullMode.style.display = 'block';
    }
}

function btnsChange() {
    var btns = document.querySelectorAll(".btn_download-windows, .btn_download-mac");
    var width = document.body.clientWidth;
    if (width < 751) {
        btns.forEach(function (btn) {
            btn.innerHTML = "Buy Now";
        })
    } else {
        btns.forEach(function (btn) {
            btn.innerHTML = "Download for Free";
        })
    }
}


