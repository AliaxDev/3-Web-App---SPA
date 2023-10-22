const form = document.querySelector('form');
const formMessage = document.querySelector('.form-message');

async function handleSubmit(event) {

    event.preventDefault();

    var data = new FormData(event.target);
    fetch('https://formspree.io/f/mvojlzlo', {
        method: 'POST',
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {

        if (response.ok) {
            
            formMessage.innerHTML = "<span>Enviado con EXITO!</span>...Gracias por Escribirnos!";
            formMessage.classList.toggle('hiden')
            console.log("success")
            form.reset()

        } else {

            response.json().then(data => {
                if (Object.hasOwn(data, 'errors')) {

                    let err = data["errors"].map(error => error["message"]).join(", ");

                    if(err == "should be an email"){
                        formMessage.innerHTML = `<span>Escriba un Email Valido</span>`;
                    }else {
                        formMessage.innerHTML = `<span>${err}</span>`;
                    }
            
                } else {

                    formMessage.innerHTML = "Oops! Ha Habido un Problema!"
                }
            })
        }

    }).catch(error => {
        formMessage.innerHTML = "Oops! Ha Habido un Problema!"
    });
}

form.addEventListener("submit", handleSubmit)