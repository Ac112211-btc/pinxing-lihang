// ========================================
// 品行利航电子半导体有限公司
// 企业官网 JavaScript
// ========================================


// ========================================
// 1. 页面加载完成
// ========================================

document.addEventListener("DOMContentLoaded", function () {

    console.log("品行利航电子半导体官网加载完成");

    // 初始化导航
    initNavigation();

    // 初始化滚动效果
    initScrollEffect();

    // 初始化产品按钮
    initProductButtons();

    // 初始化联系表单
    initContactForm();

});


// ========================================
// 2. 导航栏功能
// ========================================

function initNavigation() {

    const navLinks = document.querySelectorAll(".nav a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            // 如果不是页面内部链接
            if (!targetId || !targetId.startsWith("#")) {
                return;
            }

            const targetElement = document.querySelector(targetId);

            if (!targetElement) {
                return;
            }

            // 阻止浏览器默认跳转
            event.preventDefault();

            // 平滑滚动
            targetElement.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    });

}


// ========================================
// 3. 滚动时导航栏效果
// ========================================

function initScrollEffect() {

    const header = document.querySelector(".header");

    if (!header) {
        return;
    }

    window.addEventListener("scroll", function () {

        if (window.scrollY > 50) {

            header.style.boxShadow =
                "0 4px 20px rgba(0, 0, 0, 0.08)";

        } else {

            header.style.boxShadow = "none";

        }

    });

}


// ========================================
// 4. 根据页面位置自动切换导航高亮
// ========================================

window.addEventListener("scroll", function () {

    const sections = document.querySelectorAll("section[id]");

    const navLinks = document.querySelectorAll(".nav a");

    let currentSection = "";

    sections.forEach(function (section) {

        const sectionTop =
            section.offsetTop - 120;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection = section.getAttribute("id");

        }

    });


    navLinks.forEach(function (link) {

        link.classList.remove("active");

        const href = link.getAttribute("href");

        if (href === "#" + currentSection) {

            link.classList.add("active");

        }

    });

});


// ========================================
// 5. 产品详情按钮
// ========================================

function initProductButtons() {

    const productButtons =
        document.querySelectorAll(".product-more");

    productButtons.forEach(function (button) {

        button.addEventListener("click", function (event) {

            event.preventDefault();

            const productCard =
                this.closest(".product-card");

            if (!productCard) {
                return;
            }

            const productTitle =
                productCard.querySelector("h3");

            if (!productTitle) {
                return;
            }

            const productName =
                productTitle.textContent.trim();

            alert(
                "您正在查看：" +
                productName +
                "\n\n产品详情页面正在建设中，敬请期待。"
            );

        });

    });

}


// ========================================
// 6. 联系表单
// ========================================

function initContactForm() {

    const form =
        document.querySelector(".contact-form");

    if (!form) {
        return;
    }

    const inputs =
        form.querySelectorAll("input");

    const textarea =
        form.querySelector("textarea");

    const button =
        form.querySelector(".submit-btn");


    if (!button) {
        return;
    }


    button.addEventListener("click", function (event) {

        event.preventDefault();


        // 获取输入内容

        const name =
            inputs[0]
                ? inputs[0].value.trim()
                : "";

        const phone =
            inputs[1]
                ? inputs[1].value.trim()
                : "";

        const email =
            inputs[2]
                ? inputs[2].value.trim()
                : "";

        const message =
            textarea
                ? textarea.value.trim()
                : "";


        // ====================================
        // 检查姓名
        // ====================================

        if (name === "") {

            alert("请输入您的姓名。");

            if (inputs[0]) {
                inputs[0].focus();
            }

            return;
        }


        // ====================================
        // 检查电话号码
        // ====================================

        if (phone === "") {

            alert("请输入您的联系电话。");

            if (inputs[1]) {
                inputs[1].focus();
            }

            return;
        }


        // ====================================
        // 检查邮箱
        // ====================================

        if (email === "") {

            alert("请输入您的电子邮箱。");

            if (inputs[2]) {
                inputs[2].focus();
            }

            return;
        }


        // ====================================
        // 简单邮箱格式检查
        // ====================================

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {

            alert("请输入正确格式的电子邮箱。");

            inputs[2].focus();

            return;
        }


        // ====================================
        // 检查留言
        // ====================================

        if (message === "") {

            alert("请输入您的需求。");

            if (textarea) {
                textarea.focus();
            }

            return;
        }


        // ====================================
        // 提交成功
        // ====================================

        alert(
            "感谢您的咨询！\n\n" +
            "我们已经收到您的信息，" +
            "工作人员会尽快与您联系。"
        );


        // 清空表单

        inputs.forEach(function (input) {

            input.value = "";

        });


        if (textarea) {

            textarea.value = "";

        }

    });

}


// ========================================
// 7. 返回顶部功能
// ========================================

function scrollToTop() {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}


// ========================================
// 8. 页面滚动显示动画
// ========================================

function initScrollAnimation() {

    const elements =
        document.querySelectorAll(
            ".product-card, " +
            ".solution-card, " +
            ".advantage-card, " +
            ".news-card"
        );


    if (!elements.length) {
        return;
    }


    const observer =
        new IntersectionObserver(

            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.style.opacity = "1";

                        entry.target.style.transform =
                            "translateY(0)";

                    }

                });

            },

            {
                threshold: 0.15
            }

        );


    elements.forEach(function (element) {

        element.style.opacity = "0";

        element.style.transform =
            "translateY(25px)";

        element.style.transition =
            "opacity 0.6s ease, " +
            "transform 0.6s ease";

        observer.observe(element);

    });

}


// ========================================
// 9. 初始化页面动画
// ========================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        initScrollAnimation();

    }
);


// ========================================
// 10. 控制台信息
// ========================================

console.log(
    "===================================="
);

console.log(
    "品行利航电子半导体有限公司"
);

console.log(
    "官方网站 JavaScript 已启动"
);

console.log(
    "===================================="
);