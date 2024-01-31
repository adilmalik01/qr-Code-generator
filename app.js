let userInp = document.querySelector("#userInput")
let btn = document.querySelector(".gene-btn")
let img_box = document.querySelector("#box")
let main = document.querySelector(".inner-div")
let show_para = document.querySelector(".show")

const Generate = (e) => {
    if (userInp.value) {

        let img = document.createElement("img")
        img.src = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${userInp.value}`

        img_box.appendChild(img)
        main.style.height = '500px'
        img_box.style.height = '500px'
        btn.style.visibility = 'hidden'
        show_para.style.display = "flex"

        setTimeout(() => {
            img.src = ''
            console.log('ok');
            main.style.height = '250px'
            img_box.style.height = '50px'
            btn.style.visibility = 'visible'
            show_para.style.display = "none"


        }, 5000)
        userInp.value = ''
    }
    else {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "please Write something!",
            timer: 1000,
            showConfirmButton: false
        });
    }
}

btn.addEventListener("click", Generate)