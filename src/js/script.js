function ready(fn) {
  if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

ready(function(){
  const SortBtn = document.querySelector('#sort-btn');
  if (SortBtn) {
    SortBtn.addEventListener('click', () => {
      SortBtn.classList.toggle('active');
    });
  }
});
