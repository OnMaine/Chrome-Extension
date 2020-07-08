let tb = document.querySelectorAll('.tabs__item');

tb.forEach(function(userItem) {
  userItem.addEventListener('click', fTabs);
  });

function fTabs(event) {
  // data-tab - номер вкладки которую нужно отобразить
  let dataTab = event.target.getAttribute('data-tab');
  // отключаю active
  let tabsItem = document.getElementsByClassName('tabs__item');
  for (let i = 0; i < tabsItem.length; i++) {
    tabsItem[i].classList.remove('active');
  }
  // все вкладки с содержимым
  let tabBody = document.getElementsByClassName('tabs__block');
  for (let i = 0; i < tabBody.length; i++) {
    if (dataTab == i) {
      tabBody[i].style.display = 'block';
      tabsItem[i].classList.add('active');
    } else {
      tabBody[i].style.display = 'none';
    }
  }
}
