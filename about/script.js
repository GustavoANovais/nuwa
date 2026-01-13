document.querySelectorAll('nav a').forEach(link => {
  const linkPath = new URL(link.href, window.location.origin).pathname;
  const currentPath = window.location.pathname;

  if (linkPath === currentPath) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
    });
  }
});