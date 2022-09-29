<main class="l-landPage --mesDoCliente">
    <div class="l-landPage__title">
        <!-- <script><vtex:contentPlaceHolder id="page_title" /></script> -->
    </div>
    <div class="l-landPage__banner --desktop --top">
        <!-- <vtex:contentPlaceHolder id="banner_desktop_top" /> -->
        <div class="box-banner"><a><img width="1" height="1" src="arquivos/lp_mesDoCliente_banner_top_d.png"></a></div>
    </div>
    <div class="l-landPage__banner --mobile --top">
        <!-- <vtex:contentPlaceHolder id="banner_mobile_top" /> -->
        <div class="box-banner"><a><img width="1" height="1" src="arquivos/lp_mesDoCliente_banner_top_m.png"></a></div>
    </div>
    <div class="l-landPage__countdown">
        <div class="u-container">
            <div class="c-countdown">
                <div class="c-countdown__hero">
                    <div class="captions">
                        <h3>A promoção termina em:</h3>
                        <span>Promoção válida até 23:59 de 31/03/2022</span>
                    </div>
                    <ul class="c-count js-count" data-count="31 March 2022 23:59:00 GMT-0300">
                        <li class="c-count__item">
                            <span class="number --days"></span>
                            <span class="caption">Dias</span>
                        </li>
                        <li class="c-count__item">
                            <span class="number --hours"></span>
                            <span class="caption">Horas</span>
                        </li>
                        <li class="c-count__item">
                            <span class="number --minutes"></span>
                            <span class="caption">Minutos</span>
                        </li>
                        <li class="c-count__item">
                            <span class="number --seconds"></span>
                            <span class="caption">Segundos</span>
                        </li>
                    </ul>
                </div>
                <div class="c-countdown__end">
                    <p>Promoção encerrada! :(</p>
                    <span>Redirecionando...</span>
                </div>
            </div>
        </div>
    </div>
    <div class="l-landPage__features">
        <div class="u-container">
            <h1>Em destaque</h1>
            <div class="l-landPage__features__grid">
                <!-- <vtex:contentPlaceHolder id="banners_features" /> -->
                <div class="box-banner">
                    <a href="https://www.leonorashop.com.br/artesanato/washi-tapes">
                        <img width="1" height="1" src="arquivos/lp_mesDoCliente_vitrine_1.png">
                    </a>
                </div>
                <div class="box-banner">
                    <a href="https://www.leonorashop.com.br/artesanato/perfuradores-de-eva">
                        <img width="1" height="1" src="arquivos/lp_mesDoCliente_vitrine_2.png">
                    </a>
                </div>
                <div class="box-banner">
                    <a href="https://www.leonorashop.com.br/escritorio/canetas">
                        <img width="1" height="1" src="arquivos/lp_mesDoCliente_vitrine_3.png">
                    </a>
                </div>
            </div>
            <a href="#colecoes" class="c-btn js-goToSection">Ver Todos</a>
        </div>
    </div>
    <div class="l-landPage__banner --desktop --middle">
        <!-- <vtex:contentPlaceHolder id="banner_desktop_middle" /> -->
        <div class="box-banner"><a><img width="1" height="1" src="arquivos/lp_mesDoCliente_banner_middle_d.png"></a></div>
    </div>
    <div class="l-landPage__banner --mobile --middle">
        <!-- <vtex:contentPlaceHolder id="banner_mobile_middle" /> -->
        <div class="box-banner"><a><img width="1" height="1" src="arquivos/lp_mesDoCliente_banner_middle_m.png"></a></div>
    </div>
    <div class="l-landPage__collections" id="colecoes">
        <div class="u-container">
            <div class="l-landPage__collections__title">
                <h2>Descontos Especiais</h2>
            </div>
            <div class="l-landPage__collections__hero">
                <div class="l-landPage__collections__menu">
                    <ul>
                        <li><a href="#escolar" class="c-btnCategorie js-goToCollection is-active"><span>Escolar</span></a></li>
                        <li><a href="#escritorio" class="c-btnCategorie js-goToCollection"><span>Escritório</span></a></li>
                        <li><a href="#artesanato" class="c-btnCategorie js-goToCollection"><span>Artesanato</span></a></li>
                        <li><a href="#leotack" class="c-btnCategorie js-goToCollection"><span>leotack</span></a></li>
                    </ul>
                </div>
                <div class="l-landPage__collections__content">
                    <!-- <vtex:contentPlaceHolder id="collections" /> -->
                    <?php include('parts/componentsLPs/lp_carnaval/main-shelf.php');?>
                    <a href="#" class="c-btn js-showMoreProducts">Ver mais produtos</a>
                </div>
            </div>
        </div>
    </div>
    <div class="l-landPage__banner --desktop --last">
        <!-- <vtex:contentPlaceHolder id="banner_desktop_last" /> -->
        <div class="box-banner"><a><img width="1" height="1" src="arquivos/lp_mesDoCliente_banner_last_d.png"></a></div>
    </div>
    <div class="l-landPage__banner --mobile --last">
        <!-- <vtex:contentPlaceHolder id="banner_mobile_last" /> -->
        <div class="box-banner"><a><img width="1" height="1" src="arquivos/lp_mesDoCliente_banner_last_m.png"></a></div>
    </div>
</main>
