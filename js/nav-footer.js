// ACCESS TO DOM
// DECLARE VARIABLES
let main = document.getElementById("main")
let body = document.getElementById("body")


// INSERT NAV AND FOOTER AFTER LOAD WINDOW
window.addEventListener("load", function (event) {

    // NAV BAR
    main.insertAdjacentHTML("beforebegin", `

    <nav class="navbar navbar-dark fixed-top">
            <div class="barraContenedor">
            <div id="logo">
                    <a href="./index.html"><img id="logoImg" src="./src/yeti.png" alt="Logo yeti" height="99px" width="174.51px" /></a>
                </div>
                <div id="pages">
                    <a class="navbar-brand" href="./index.html"><strong>INICIO</strong>
                    </a>
                    <a class="navbar-brand" href="./catalogo.html"><strong>CATÁLOGO</strong>
                    </a>
                    <a class="navbar-brand" href="./personaliza.html"><strong>PERSONALIZA</strong></a>
                    <a class="navbar-brand" href="./contacto.html"><strong>CONTACTO</strong></a>
                    <a class="navbar-brand" href="./acercade.html "><strong>NOSOTROS</strong></a>
                </div>
                
                <div id="redSocials">
                    <a href="./carrito.html"><img id="car" src="./src/carrito.png" alt="carrito" height="40px"
                            width="40px" /></a>
                    <a href="./login.html"><img id="log" src="./src/login.png" alt="login" height="40px"
                            width="40px" /></a>
                    <a href="https://api.whatsapp.com/send?phone=525534266537&text=Quiero%20informaci%C3%B3n%20sobre%20los%20Yetis,%20porfavor"
                        target="_blank"><img id="wap" src="./src/whatsapp.png" alt="whatsapp" height="40px"
                            width="40px" /></a>
                </div>
                <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar"
                    aria-controls="offcanvasDarkNavbar" id="btnRight">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasDarkNavbar"
                    aria-labelledby="offcanvasNavbarLabel">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="offcanvasNavbarLabel" style="color: #fff">
                            PERSONALIZA TU YETI
                        </h5>
                        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas"
                            aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="./index.html">INICIO</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="./catalogo.html">CATÁLOGO</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="./personaliza.html">PERSONALIZA TU YETI</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="./contacto.html">CONTACTO</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/acercade.html">NOSOTROS</a>
                                </li>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    `);

    // FOOTER
    body.insertAdjacentHTML("beforeend",`
    <div class="fixed-bottom">
    <footer id="footerREAL">
        <div class="footer">
            <em>Copyright &#169; 2023 | YETI PERSONALIZADO MX</em>
        </div>
        <div class="footer2">
            <a href="https://www.instagram.com/yeti.personalizadomx/" target="_blank"><img src="./src/insta.png"
                    alt="instagram" height="25px" width="25px" /></a>
            <a href="https://www.facebook.com/yeti.personalizado" target="_blank"><img src="./src/face.png"
                    alt="facebook" height="25px" width="25px" /></a>
        </div> 
    </footer>
    </div>
    `);

}); //WINDOW-LOAD