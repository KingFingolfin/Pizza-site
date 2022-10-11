
const home = document.getElementById('li1');
const aboutUS = document.getElementById('li2');
const menu = document.getElementById('li3');
const fgallery = document.getElementById('li4');

const body = document.body;

home.onclick = () =>{
	home.classList.add('clicked');
    aboutUS.classList.remove('clicked');
    menu.classList.remove('clicked');
    fgallery.classList.remove('clicked');
    ForResp();
};
aboutUS.onclick = () =>{
	aboutUS.classList.add('clicked');
    home.classList.remove('clicked');
    menu.classList.remove('clicked');
    fgallery.classList.remove('clicked');
    ForResp();
};
menu.onclick = () =>{
	menu.classList.add('clicked');
    home.classList.remove('clicked');
    aboutUS.classList.remove('clicked');
    fgallery.classList.remove('clicked');
    ForResp();
};
fgallery.onclick = () =>{
	fgallery.classList.add('clicked');
    home.classList.remove('clicked');
    aboutUS.classList.remove('clicked');
    menu.classList.remove('clicked');
    ForResp();
};

function myFunction() {
    const x = document.getElementById("navMenu");
    if (x.className === "nav__ul") {
        x.classList.remove('nav__ul');
        x.classList.add('responsive');
    } else {
        x.classList.remove('responsive');
        x.classList.add('nav__ul');
    }
  }

  function ForResp() {
    const x = document.getElementById("navMenu");
    if (x.className === "responsive") {
        x.classList.remove('responsive');
        x.classList.add('nav__ul');
    } 
  }

function Change(){
    if (body.className === 'dark') {
        body.classList.replace('dark','light');
        ForResp();
    } else {
        body.classList.replace('light','dark');
        ForResp();
    }
}