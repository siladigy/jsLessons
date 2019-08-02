const sendForm = () => {
  
    const errorMessage = 'что то пошло не так..',
          loadMessage = 'загрузка..',
          successMessage = 'спасибо! мы скоро с вами свяжемся';
  
      const form1 = document.getElementById('form1'),
            form2 = document.getElementById('form2'),
            form3 = document.getElementById('form3');
  
      const statusMessage = document.createElement('div');

      statusMessage.style.color = "white";
      
      const submitForm = (form) => {
      form.addEventListener('submit', (event) => {
        event.preventDefault();
        form.appendChild(statusMessage);
        statusMessage.textContent = loadMessage;
        const formData = new FormData(form);
        let body = {};
  
        for (let val of formData.entries()){
          body[val[0]] = val[1];
        }
        postData(body)
          .then((response) => {
            if(response.status !== 200) {
              throw new Error('status network not 200');
            }
            statusMessage.textContent = successMessage;
            form.reset();
        })
          .catch((error) => {
            statusMessage.textContent = errorMessage;
            console.log(error);
        });
      });
    };
  
    submitForm(form1);
    submitForm(form2);
    submitForm(form3);
  
  
      const postData = (body) => {
        return fetch('./server.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(body)
        }); 
      };
  
      const tel = document.querySelectorAll('input[type=tel]');
      tel.forEach((elem) => {
        elem.addEventListener('input', () => {
          elem.value = elem.value.replace(/[^+0-9]+/gi, "");
        });
      });
      const text = document.querySelectorAll('input[type=text]');
      text.forEach((elem) => {
        elem.addEventListener('input', () => {
          elem.value = elem.value.replace(/[^а-я ]+/gi, "");
        });
      });
      const message = document.getElementById('form2-message');
  
      message.addEventListener('input', () => {
        message.value = message.value.replace(/[^а-я ]+/gi, "");
      });
  };

  export default sendForm;