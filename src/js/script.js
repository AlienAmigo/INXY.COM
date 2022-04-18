function ready(fn) {
  if (
    document.attachEvent
      ? document.readyState === 'complete'
      : document.readyState !== 'loading'
  ) {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

ready(function () {
  const SortBtn = document.querySelector('#sort-btn');
  if (SortBtn) {
    SortBtn.addEventListener('click', () => {
      SortBtn.classList.toggle('active');
    });
  }

  const SearchTrigger = document.querySelector('#search-trigger');
  const SearchForm = document.querySelector('#search-form');
  const ToggleForm = () => {
    SearchForm.classList.toggle('active');
    SearchTrigger.classList.toggle('disable');
  };

  if (SearchTrigger && SearchForm) {
    const SearchFormInput = SearchForm.querySelector('.search-form__input');
    SearchForm.addEventListener('submit', ev => {
      ev.preventDefault();
      SearchFormInput.value = '';
      ToggleForm();
    });

    SearchTrigger.addEventListener('click', () => ToggleForm());
  }
});
