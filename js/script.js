
        var reloadBtnAll = document.querySelector('.reloadBtnAll')
        var reloadBtnScreen = document.querySelector('.reloadBtnScreen')
        var showAnsBtn = document.querySelector('.showAnsBtn')
        var backBtn = document.querySelector('.backBtn')
        var nextBtn = document.querySelector('.nextBtn')

        var correctQuestion1 = document.querySelector(".question1 .option[Answer='correct']")
        var incorrectQuestion1 = document.querySelector(".question1 .option[Answer='incorrect']")
        var correctQuestion2 = document.querySelector(".question2 .option[Answer='correct']")
        var incorrectQuestion2 = document.querySelector(".question2 .option[Answer='incorrect']")
        var correctQuestion3 = document.querySelector(".question3 .option[Answer='correct']")
        var incorrectQuestion3 = document.querySelector(".question3 .option[Answer='incorrect']")
        var correctQuestion4 = document.querySelector(".question4 .option[Answer='correct']")
        var incorrectQuestion4 = document.querySelector(".question4 .option[Answer='incorrect']")


        correctQuestion1.addEventListener("click", () => { correctQuestion1.classList.add("correct"); incorrectQuestion1.classList.add("disabled") })
        incorrectQuestion1.addEventListener("click", () => { incorrectQuestion1.classList.toggle("incorrect") })

        correctQuestion2.addEventListener("click", () => { correctQuestion2.classList.add("correct"); incorrectQuestion2.classList.add("disabled") })
        incorrectQuestion2.addEventListener("click", () => { incorrectQuestion2.classList.toggle("incorrect") })

        correctQuestion3.addEventListener("click", () => { correctQuestion3.classList.add("correct"); incorrectQuestion3.classList.add("disabled") })
        incorrectQuestion3.addEventListener("click", () => { incorrectQuestion3.classList.toggle("incorrect") })

        correctQuestion4.addEventListener("click", () => { correctQuestion4.classList.add("correct"); incorrectQuestion4.classList.add("disabled") })
        incorrectQuestion4.addEventListener("click", () => { incorrectQuestion4.classList.toggle("incorrect") })

        reloadBtnAll.addEventListener("click", doReloadBtnAll)
        reloadBtnScreen.addEventListener("click", doReloadBtnScreen)
        showAnsBtn.addEventListener("click", doShowAnsBtn)
        backBtn.addEventListener("click", doBackBtn)
        nextBtn.addEventListener("click", doNextBtn)

        function doReloadBtnAll() {
            console.log("reloadBtnAll clicked")
            let correctAsnwers = document.querySelectorAll(".item .option[Answer='correct']")
            let wrongAsnwers = document.querySelectorAll(".item .option[Answer='incorrect']")
            for (let i = 0; i < correctAsnwers.length; i++) {
                correctAsnwers[i].classList.remove("correct");
                wrongAsnwers[i].classList.remove("incorrect");
                wrongAsnwers[i].classList.remove("disabled")
            }
            document.querySelector(".item1").classList.add("active")
            document.querySelector(".item2").classList.remove("active")
            backBtn.setAttribute("disabled", "")
            backBtn.classList.add("disabled")
            nextBtn.removeAttribute("disabled")
            nextBtn.classList.remove("disabled")
            document.querySelector(".pageNumber").innerHTML = "1 of 2"
        }
        function doReloadBtnScreen() {
            console.log("reloadBtnScreen clicked")
            let correctAsnwers = document.querySelectorAll(".item.active .option[Answer='correct']")
            let wrongAsnwers = document.querySelectorAll(".item.active .option[Answer='incorrect']")
            for (let i = 0; i < correctAsnwers.length; i++) {
                correctAsnwers[i].classList.remove("correct");
                wrongAsnwers[i].classList.remove("incorrect");
                wrongAsnwers[i].classList.remove("disabled")
            }
        }
        function doShowAnsBtn() {
            console.log("showAnsBtn clicked")
            let correctAsnwers = document.querySelectorAll(".item.active .option[Answer='correct']")
            let wrongAsnwers = document.querySelectorAll(".item.active .option[Answer='incorrect']")
            for (let i = 0; i < correctAsnwers.length; i++) {
                correctAsnwers[i].classList.add("correct");
                wrongAsnwers[i].classList.add("disabled")
            }
        }
        function doBackBtn() {
            console.log("backBtn clicked")
            document.querySelector(".pageNumber").innerHTML = "1 of 2"
            backBtn.setAttribute("disabled", "")
            backBtn.classList.add("disabled")
            nextBtn.removeAttribute("disabled")
            nextBtn.classList.remove("disabled")
            document.querySelector(".item1").classList.add("active")
            document.querySelector(".item2").classList.remove("active")
        }
        function doNextBtn() {
            console.log("nextBtn clicked")
            document.querySelector(".pageNumber").innerHTML = "2 of 2"
            nextBtn.setAttribute("disabled", "")
            nextBtn.classList.add("disabled")
            backBtn.removeAttribute("disabled")
            backBtn.classList.remove("disabled")
            document.querySelector(".item2").classList.add("active")
            document.querySelector(".item1").classList.remove("active")
        }