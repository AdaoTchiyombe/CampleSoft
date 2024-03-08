class HTMLElement {
    constructor() {
      if (this.constructor === HTMLElement) {
        throw new TypeError("Esta classe não pode ser instânciada");
      } else {
        this.body = document.body;
        this.head = document.head;
        this.siteTitle = "Instituto Politécnico Dom Damião Franklin";
  
        this.logo = {
          src: "../img/OIP (2).png",
          alt: "logo-ipddf",
        };
        this.navBarLinks = [
          {
            text: "início",
            href: "inicio.html",
          },
          {
            text: "instituição",
            href: "instituicao.html",
          },
          {
            text: "contatos",
            href: "contatos.html",
          },
          {
            text: "notícias",
            href: "noticias/inicio.html",
          },
          {
            text: "secretaria",
            href: "secretaria.html",
          },
        ];
      }
    }
  }
  
  class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    showElements() {
      this.header = document.createElement("header");
  
      const containerImg = document.createElement("div");
      containerImg.setAttribute("class", "container-img");
      containerImg.innerHTML = `<a href="${this.navBarLinks[0].href}"><img src="${this.logo.src}" alt="${this.logo.alt}" /></a>`;
      this.header.appendChild(containerImg);
  
      const titulo = document.createElement("h1");
      titulo.innerHTML = this.siteTitle;
      this.header.appendChild(titulo);
  
      const btnOpenNavBar = document.createElement("i");
      btnOpenNavBar.setAttribute("class", "fa-solid fa-bars");
      btnOpenNavBar.addEventListener("click", this.toggleNavBarVisibility);
      this.header.appendChild(btnOpenNavBar);
  
      const navBarDesktop = document.createElement("div");
      navBarDesktop.setAttribute("class", "nav-bar");
  
      this.navBarLinks.forEach((link) => {
        const newLink = document.createElement("a");
        newLink.setAttribute("href", link.href);
        newLink.innerHTML = link.text;
        navBarDesktop.appendChild(newLink);
      });
      this.header.appendChild(navBarDesktop);
  
      const shadow = document.createElement("div");
      shadow.setAttribute("class", "shadow");
  
      const navBarPhone = document.createElement("div");
      navBarPhone.setAttribute("class", "nav-bar");
  
      const headNavBarPhone = document.createElement("div");
      headNavBarPhone.setAttribute("class", "head-nav-bar");
  
      const tituloNavBarPhone = document.createElement("h2");
      tituloNavBarPhone.innerHTML = "Menu";
      headNavBarPhone.appendChild(tituloNavBarPhone);
  
      const btnCloseNavBar = document.createElement("i");
      btnCloseNavBar.setAttribute("class", "fa-solid fa-xmark");
      btnCloseNavBar.addEventListener("click", this.toggleNavBarVisibility);
      headNavBarPhone.appendChild(btnCloseNavBar);
      navBarPhone.appendChild(headNavBarPhone);
  
      const bodyNavBarPhone = document.createElement("div");
      this.navBarLinks.forEach((link) => {
        const newLink = document.createElement("a");
        newLink.setAttribute("href", link.href);
        newLink.innerHTML = link.text;
        bodyNavBarPhone.appendChild(newLink);
      });
      bodyNavBarPhone.setAttribute("class", "body-nav-bar");
      navBarPhone.appendChild(bodyNavBarPhone);
  
      const footNavBarPhone = document.createElement("div");
      footNavBarPhone.setAttribute("class", "foot-nav-bar");
  
      const btnSingIn = document.createElement("button");
      btnSingIn.setAttribute("class", "btn-sign-in");
      btnSingIn.innerHTML = "Iniciar Sessão";
      footNavBarPhone.appendChild(btnSingIn);
      navBarPhone.appendChild(footNavBarPhone);
  
      shadow.appendChild(navBarPhone);
      this.header.appendChild(shadow);
  
      this.body.prepend(this.header);
    }
  
    toggleNavBarVisibility() {
      const divShadow = document.querySelector(".shadow");
      divShadow.classList.toggle("show");
    }
  }

  
  export { Header };