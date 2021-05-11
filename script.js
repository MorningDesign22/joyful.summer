//ドロアーメニュー開く
jQuery('.btnMenu').on('click', function(e) {
  e.preventDefault();

  
  jQuery('.btnMenu').toggleClass('is-active');
  jQuery('.btn_menu').toggleClass('is-active');
  jQuery('.drawer-content').toggleClass('is-active');

  return false;

});


//ドロワーメニュー閉まる
jQuery('.btn_menu').on('click', function(e) {
  e.preventDefault();

  
  jQuery('.btnMenu').toggleClass('is-active');
  jQuery('.btn_menu').toggleClass('is-active');
  jQuery('.drawer-content').toggleClass('is-active');

  return false;

});