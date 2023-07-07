

window.addEventListener('scroll', function() {
    var navContainer = document.querySelector('.nav-container');
  
    if (window.pageYOffset > 0) {
      navContainer.style.position = 'fixed';
      navContainer.style.top = '0';
      navContainer.style.background = 'black'
      
    } else if(this.window.pageXOffset ===  0) {
      navContainer.style.position = 'absolute';
      navContainer.style.top = '';
      navContainer.style.background = ''
      
    }
  });

  let burger = document.querySelector('.burger')
  let navbar = document.querySelector('.navbar-list')
  let clickCount = 0
  
  burger.addEventListener('click', expand)
  
  function expand() {
    navbar.classList.toggle('active')
    clickCount++
    let rotation = clickCount % 2 === 0 ? 0 : -90
    burger.style.transition = 'transform 0.5s'
    burger.style.transform = `rotate(${rotation}deg)`
  }


  

const observer = new IntersectionObserver((entries) =>{
  entries.forEach((entry)  =>{
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    }else{
      entry.target.classList.remove('show');
    }
  });
});
  
const hiddenElemeents = document.querySelectorAll('.hidden');
hiddenElemeents.forEach((el)  => observer.observe(el))

const observer1 = new IntersectionObserver((entries) =>{
  entries.forEach((entry)  =>{
    if(entry.isIntersecting){
      entry.target.classList.add('show2');
    }else{
      entry.target.classList.remove('show2');
    }
  });
});
  
const hiddenElemeents1 = document.querySelectorAll('.hidden2');
hiddenElemeents1.forEach((el)  => observer1.observe(el))



  