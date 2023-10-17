/*
window.onload = () =>{
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
 
    const checkbox = document.querySelector('input[type="checkbox"]');
    
    checkbox.addEventListener("change", function (event) {
      
      if(event.target.checked){
        document.documentElement.classList.remove('dark');
        localStorage.theme = 'light';
      } else{
        document.documentElement.classList.add('dark');
        localStorage.theme = 'dark';
      }
    });
      
  } */
  
