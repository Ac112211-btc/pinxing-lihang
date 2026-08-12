/* ==================================================
   品行利航官网 JS
================================================== */

document.addEventListener("DOMContentLoaded", function () {

    /* =========================
       手机端导航菜单
    ========================= */

    const menuToggle =
        document.getElementById("menuToggle");

    const mainNav =
        document.getElementById("mainNav");


    if (menuToggle && mainNav) {

        menuToggle.addEventListener("click", function () {

            mainNav.classList.toggle("active");

        });


        /* 点击导航后自动关闭 */

        const navLinks =
            mainNav.querySelectorAll("a");

        navLinks.forEach(function (link) {

            link.addEventListener("click", function () {

                mainNav.classList.remove("active");

            });

        });

    }


    /* =========================
       返回顶部
    ========================= */

    const backTop =
        document.getElementById("backTop");


    if (backTop) {

        window.addEventListener("scroll", function () {

            if (window.scrollY > 500) {

                backTop.classList.add("show");

            } else {

                backTop.classList.remove("show");

            }

        });


        backTop.addEventListener("click", function () {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    }


    /* =========================
       当前页面导航高亮
    ========================= */

    const sections =
        document.querySelectorAll("section[id]");

    const links =
        document.querySelectorAll(".nav a");


    window.addEventListener("scroll", function () {

        let current = "";

        sections.forEach(function (section) {

            const sectionTop =
                section.offsetTop - 120;

            if (window.scrollY >= sectionTop) {

                current = section.getAttribute("id");

            }

        });


        links.forEach(function (link) {

            link.classList.remove("active");

            if (
                link.getAttribute("href") ===
                "#" + current
            ) {

                link.classList.add("active");

            }

        });

    });

});