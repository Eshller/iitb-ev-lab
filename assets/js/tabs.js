const tabButtons = document.querySelectorAll('.tab-button');
  const tabContents = document.querySelectorAll('.tab-content');
  const tabButtonsContainer = document.querySelector('.tab-buttons');

tabButtons.forEach(button => {
    button.addEventListener('click', function () {
      const tab = this.getAttribute('data-tab');

      tabButtons.forEach(btn => btn.classList.remove('active'));
      tabContents.forEach(content => content.classList.remove('active'));

      this.classList.add('active');
      document.querySelector(`.tab-content[data-tab="${tab}"]`).classList.add('active');

      document.querySelector('.tab-contents').scrollTo({ top: 0, behavior: 'smooth' });
    });
  });

tabButtons[0].classList.add('active');
  tabContents[0].classList.add('active');