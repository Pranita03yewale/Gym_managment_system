document.addEventListener('DOMContentLoaded', function () {
    const sidebarLinks = document.querySelectorAll('[data-page]');
  
    sidebarLinks.forEach(link => {
      link.addEventListener('click', function (event) {
        event.preventDefault();
        const page = this.getAttribute('data-page');
        loadContent(page);
      });
    });
  
    function loadContent(page) {
      const contentDiv = document.getElementById('content');
      fetch(`pages/${page}`)
        .then(response => {
          if (!response.ok) {
            throw new Error('Page not found');
          }
          return response.text();
        })
        .then(data => {
          contentDiv.innerHTML = data;
        })
        .catch(error => {
          contentDiv.innerHTML = `<p>Error: ${error.message}</p>`;
        });
    }
  });
  