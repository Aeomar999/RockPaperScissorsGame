const gameContainer = document.querySelector(".container"),
    userResult = document.querySelector(".user_result img"),
    cpuResult = document.querySelector(".cpu_result img"),
    result = document.querySelector(".result"),
    optionImages = document.querySelectorAll(".option_image");

///console.log(gameContainer,userResult,cpuResult,result,optionImages);
optionImages.forEach((image,index) => {
    image.addEventListener("click",() => {
        image.classList.add("active")
    })
})