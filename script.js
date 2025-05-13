const gameContainer = document.querySelector(".container"),
    userResult = document.querySelector(".user_result img"),
    cpuResult = document.querySelector(".cpu_result img"),
    result = document.querySelector(".result"),
    optionImages = document.querySelectorAll(".option_image");

optionImages.forEach((image,index) => {
    image.addEventListener("click",(e) => {
        image.classList.add("active");

        optionImages.forEach((image2,index2) => {
            index !== index2 && image2.classList.remove("active");
        });

        gameContainer.classList.add("start");

        let time = setTimeout(() => {
            gameContainer.classList.remove("start");
            let imageSrc = e.target.querySelector("img").src;
            userResult.src = imageSrc;

            let randomNumber = Math.floor(Math.random() * 3);
            let cpuImages = ["rock-paper-scissor-game-images/images/rock.png", "rock-paper-scissor-game-images/images/paper.png", "rock-paper-scissor-game-images/images/scissors.png"];
            cpuResult.src = cpuImages[randomNumber];
            let cpuValue = ["R", "P", "S"][randomNumber];
            let userValue = ["R", "P", "S"][index];

            console.log(cpuValue, userValue);

            let outcomes = {
                RR: "Draw",
                RP: "Cpu",
                RS: "User",
                PR: "User",
                PP: "Draw",
                PS: "Cpu",
                SR: "Cpu",
                SP: "User",
                SS: "Draw",
            };

            let outComeValue = outcomes[userValue + cpuValue];

            result.textContent = userValue === cpuValue ? "Match Draw" : `${outComeValue} Won!!!`;
        },2500)

    });
});