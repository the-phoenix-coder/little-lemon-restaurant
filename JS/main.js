/*================== SCROLL SECTIONS ACTIVE LINK ==================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>
{
  const scrollDown = window.scrollY
  
  sections.forEach(current =>
    {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop + 58;
      const sectionId = current.getAttribute('id');
      const sectionsClass = document.querySelector('.nav_menu a[href*=' + sectionId + ']')
      if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight)
      {
        sectionsClass.classList.add('active_link')
      } else
      {
        sectionsClass.classList.remove('active_link')
      }
    })
  }
window.addEventListener('scroll', scrollActive)
/*================== Testimonial Swiper ==================*/
const swiper = new Swiper('.swiper', {
  loop: true,
  spaceBetween: 16,
  grabCursor: true,
  slidesPerView: 'auto',
  centeredSlides: 'auto',

  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
})