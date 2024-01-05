function subscribe() {
    var nameInput = document.getElementById('nameInput');
    var emailInput = document.getElementById('emailInput');
    var thankYouMessage = document.getElementById('thankYouMessage');}

    if (nameInput.value.trim() !== '' && emailInput.value.trim() !== '') {

      nameInput.style.display = 'none';
      emailInput.style.display = 'none';
      emailInput.nextElementSibling.style.display = 'none';

      thankYouMessage.style.display = 'block';
    }