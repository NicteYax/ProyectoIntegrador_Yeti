let main = document.getElementById("main")
let body = document.getElementById("body")

window.addEventListener("load", function (event) {

    main.insertAdjacentHTML("beforebegin", `

    <nav class="navbar navbar-dark fixed-top">
            <div class="barraContenedor">
                <div id="pages">
                    <a class="navbar-brand" href="./index.html" target="_blank"><strong>INICIO</strong>
                    </a>
                    <a class="navbar-brand" href="./catalogo.html" target="_blank"><strong>CATÁLOGO</strong>
                    </a>
                    <a class="navbar-brand" href="./personaliza.html" target="_blank"><strong>PERSONALIZA</strong></a>
                    <a class="navbar-brand" href="./contacto.html" target="_blank"><strong>CONTACTO</strong></a>
                </div>
                <div id="logo">
                    <a href="./index.html"><img id="logoImg" src="./src/yeti.png" alt="Logo yeti" height="99px" width="174.51px" /></a>
                </div>
                <div id="redSocials">
                    <a href="./carrito.html" target="_blank"><img id="car" src="./src/carrito.png" alt="carrito" height="40px"
                            width="40px" /></a>
                    <a href="./login.html" target="_blank"><img id="log" src="./src/login.png" alt="login" height="40px"
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
                                <a class="nav-link active" aria-current="page" href="./index.html" target="_blank">INICIO</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="./catalogo.html" target="_blank">CATÁLOGO</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="./personaliza.html" target="_blank">PERSONALIZA TU YETI</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="./contacto.html" target="_blank">CONTACTO</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    ACERCA DE NOSOTROS
                                </a>
                                <ul class="dropdown-menu dropdown-menu-dark">
                                    <li>
                                        <a class="dropdown-item" href="/acercade.html" target="_blank">NOSOTROS</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="#integrants" target="_blank">DESARROLLADORES</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    `);


    body.insertAdjacentHTML("beforeend",`
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
    
    `);



});