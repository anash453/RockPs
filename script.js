const gameContainer = document.querySelector("#container");
userResult = document.querySelector("#user_result img");
cpuResult = document.querySelector("#cpu_result img");
result = document.querySelector("#result");
optionImages = document.querySelectorAll("#option_image");

optionImages.forEach((image, index) => {
  image.addEventListener("click", (e) => {
    image.classList.add("active");

    optionImages.forEach((image2, index2) => {
        index !== index2 && image2.classList.remove("active");
      });

      gameContainer.classList.add("start");

    let time = setTimeout(() => {
        
        gameContainer.classList.remove("start");

      let imageSrc = e.target.querySelector("img").src;
      userResult.src = imageSrc;

      const randomN = Math.floor(Math.random() * 3);
      const cpuImages = [
        "image/rock.png",
        "image/paper.png",
        "image/scissors.png",
      ];
      cpuResult.src = cpuImages[randomN];

      let cpuValue = ["R", "P", "S"][randomN];
      let userValue = ["R", "P", "S"][index];

      let outcomes = {
        RR: "Draw",
        RP: "Cpu",
        RS: "User",
        PP: "Draw",
        PR: "User",
        PS: "Cpu",
        SS: "Draw",
        SR: "Cpu",
        SP: "User",
      };
      let outComeValue = outcomes[userValue + cpuValue]; 

      result.textContent =
        userValue === cpuValue ? "Match Draw" : `${outComeValue} "Won!"`;
    }, 2500);
  });
});
