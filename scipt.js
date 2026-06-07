// ===== 네비게이션 스크롤 효과 =====
var navbar = document.getElementById('navbar')

window.addEventListener('scroll', function () {
  if (window.scrollY > 30) {
    navbar.classList.add('scrolled')
  } else {
    navbar.classList.remove('scrolled')
  }
})

// ===== 햄버거 메뉴 (모바일) =====
var hamburger = document.getElementById('hamburger')
var navLinks = document.querySelector('.nav-links')

hamburger.addEventListener('click', function () {
  navLinks.classList.toggle('open')
})

navLinks.querySelectorAll('a').forEach(function (link) {
  link.addEventListener('click', function () {
    navLinks.classList.remove('open')
  })
})

// ===== 스크롤하면 카드 페이드인 =====
var cards = document.querySelectorAll(
  '.about-card, .project-card, .contact-card',
)

cards.forEach(function (card) {
  card.style.opacity = '0'
  card.style.transform = 'translateY(20px)'
  card.style.transition = 'opacity 0.5s ease, transform 0.5s ease'
})

var cardObserver = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1'
        entry.target.style.transform = 'translateY(0)'
        cardObserver.unobserve(entry.target)
      }
    })
  },
  { threshold: 0.15 },
)

cards.forEach(function (card) {
  cardObserver.observe(card)
})

// ===== 네비게이션 현재 섹션 표시 =====
var sections = document.querySelectorAll('section[id]')
var navAnchors = document.querySelectorAll('.nav-links a')

window.addEventListener('scroll', function () {
  var scrollPos = window.scrollY + 80

  sections.forEach(function (section) {
    var sectionTop = section.offsetTop
    var sectionBottom = sectionTop + section.offsetHeight
    var sectionId = section.getAttribute('id')

    if (scrollPos >= sectionTop && scrollPos < sectionBottom) {
      navAnchors.forEach(function (a) {
        a.style.color = ''
      })
      var activeLink = document.querySelector(
        '.nav-links a[href="#' + sectionId + '"]',
      )
      if (activeLink) {
        activeLink.style.color = '#3b82f6'
      }
    }
  })
})

// ===== 페이지 로드 시 히어로 텍스트 등장 =====
window.addEventListener('load', function () {
  var heroContent = document.querySelector('.hero-content')
  heroContent.style.opacity = '0'
  heroContent.style.transform = 'translateY(24px)'
  heroContent.style.transition = 'opacity 0.7s ease, transform 0.7s ease'

  setTimeout(function () {
    heroContent.style.opacity = '1'
    heroContent.style.transform = 'translateY(0)'
  }, 100)
})

// ===== 현재 연도 자동 업데이트 =====
var footer = document.querySelector('footer p')
if (footer) {
  var currentYear = new Date().getFullYear()
  footer.textContent =
    '© ' + currentYear + ' 유시우. 열심히 공부하는 중입니다 💪'
}

// ===== 공부기록 탭 전환 =====
var tabBtns = document.querySelectorAll('.tab-btn')
var tabContents = document.querySelectorAll('.tab-content')

tabBtns.forEach(function (btn) {
  btn.addEventListener('click', function () {
    var target = btn.getAttribute('data-tab')

    tabBtns.forEach(function (b) {
      b.classList.remove('active')
    })
    tabContents.forEach(function (c) {
      c.classList.remove('active')
    })

    btn.classList.add('active')
    document.getElementById('tab-' + target).classList.add('active')
  })
})
