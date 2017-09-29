(function init(){
  var currentBR = true;
  var languageDiv = document.querySelector('#language');
  var faceDiv = document.querySelector('#face');
  var languageButton = document.querySelector('#language img');
  languageButton.addEventListener('click', function(){
    if(currentBR){
      faceDiv.innerHTML = `<img class="temer" src="./assets/img/en_us.png" alt="">`
      languageButton.src = './assets/img/br_flag.png'
      document.body.classList.replace('brazil-body', 'usa-body');
      currentBR = false;
    }else{
      faceDiv.innerHTML = `<img class="temer" src="./assets/img/pt_br.png" alt="">`
      languageButton.src = './assets/img/us_flag.png'
      document.body.classList.replace('usa-body','brazil-body');
      currentBR = true;
    }
  });

})();