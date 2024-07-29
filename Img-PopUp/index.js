
const throttleFunction = (func, delay) => {
    let prev = 0;
    return (...args) => {
        let now = new Date().getTime();
        if (now - prev > delay) {
            prev = now;
            return func(...args);
        }
    };
};

document.querySelector("#center").addEventListener("mousemove", throttleFunction((dest) => {
    var div = document.createElement("div");
    div.classList.add("imgdiv");
    div.style.left = dest.clientX + "px";
    div.style.top = dest.clientY + "px";

    const images = [
        "https://media.istockphoto.com/id/1820707417/photo/british-shorthair-cat-wearing-sunglasses.webp?b=1&s=170667a&w=0&k=20&c=beJrRvUTDQwbnIT0xk2Ge_EwrbS9VM_VWl9P9XitwpQ="
        // "https://media.istockphoto.com/id/1284904554/photo/image-of-cartoon-face-drawn-on-boiled-egg-happiness-fun-and-joy.webp?b=1&s=170667a&w=0&k=20&c=k14QxSSIrhGb07mBaBVXBR-fGcvoRjzj_-mMzM4N9dY=",
    ];

    images.forEach(src => {
        var img = document.createElement("img");
        img.setAttribute("src", src);
        // img.classList.add("animated-img"); // Optional: Add a class for styling
        div.appendChild(img);

        gsap.to(img, {
            y: "0",
            ease: Power1,
            duration: 0.6
        });

        gsap.to(img, {
            y: "20%",
            delay: 0.6,
            ease: Power2,
        });
    });

    document.body.appendChild(div);

    setTimeout(function () {
        div.remove();
    }, 2000);
}, 400));







