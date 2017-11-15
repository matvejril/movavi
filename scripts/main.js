window.onload = function() {
    var changeStep = document.querySelectorAll(".to-easy, .to-full");
    changeStep.forEach(function (item) {
        item.addEventListener('click', changeStepFun);
    });
    btnsChange();
};

window.onresize = function() {
    btnsChange();
};

function changeStepFun(e) {
    var btn = e.target;
    var stepEasyModel = document.querySelector(".sm-guide-step_easy-mode");
    var stepFullModel = document.querySelector(".sm-guide-step_full-mode");
    var btnCreateEasy = document.querySelector(".btn_create-easy");
    var btnCreateFull = document.querySelector(".btn_create-full");

    if (btn.classList.contains('to-easy')) {
        stepEasyModel.style.display = 'block';
        stepFullModel.style.display = 'none';
        if (!btn.classList.contains('btn_create-active')) {
            btnCreateEasy.classList.add('btn_create-active');
            btnCreateFull.classList.remove('btn_create-active');
        }
    } else {
        stepEasyModel.style.display = 'none';
        stepFullModel.style.display = 'block';
        if (!btn.classList.contains('btn_create-active')) {
            btnCreateEasy.classList.remove('btn_create-active');
            btnCreateFull.classList.add('btn_create-active');
        }
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