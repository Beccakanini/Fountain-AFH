 // mobile menu toggle
    document.getElementById('mobile-menu-button').addEventListener('click', () => {
      document.getElementById('mobile-menu').classList.toggle('hidden');
    });

    // navbar background change on scroll
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.classList.add('bg-white', 'shadow-md');
        navbar.classList.remove('bg-transparent');
        navbar.querySelectorAll('a').forEach(link => link.classList.replace('text-white', 'text-gray-800'));
      } else {
        navbar.classList.remove('bg-white', 'shadow-md');
        navbar.classList.add('bg-transparent');
        navbar.querySelectorAll('a').forEach(link => link.classList.replace('text-gray-800', 'text-white'));
      }
    });
    const tabs = document.querySelectorAll('.meal-tab');
  const panels = document.querySelectorAll('.meal-panel');

  function showMealTab(index) {
    tabs.forEach((tab, i) => {
      tab.classList.toggle('bg-[#B8860B]', i === index);
      tab.classList.toggle('text-white', i === index);
      tab.classList.toggle('bg-gray-200', i !== index);
      tab.classList.toggle('text-gray-800', i !== index);
    });
    panels.forEach((panel, i) => {
      panel.classList.toggle('hidden', i !== index);
      panel.classList.toggle('block', i === index);
    });
  }