<?php
// init config
$title = 'Leonora B2C | Edits & LP';
// $pagina = explode('laures/', $_SERVER['REQUEST_URI']);
$pagina = explode('/', $_SERVER['REQUEST_URI']);
$classOnBody = 'p-inner';

// loop pages
switch ($pagina[1]) {
    // Boilerplate
    case 'laures':
    case 'ronak':
    case 'lauresronak':
    case 'docs':
    case 'documentation':
        $file = '_boilerplate/sections.php';
        $title_page = 'Documentação - '.$title;
        break;

    // Home
    case '' :
    case 'home' :
        $file = 'page_home.php';
        $title_page = $title;
        $classOnBody = 'p-home';
        break;

    // inner pages
    case 'lp-carnaval' :
        $file = 'page_lp_carnaval.php';
        $title_page = $title;
        $classOnBody = 'p-inner lauresLandPages';
        break;
    case 'lp-mes-cliente' :
        $file = 'page_lp_mesDoCliente.php';
        $title_page = $title;
        $classOnBody = 'p-inner lauresLandPages';
        break;
    case 'lp-mes-das-maes' :
        $file = 'page_lp_mesDasMaes.php';
        $title_page = $title;
        $classOnBody = 'p-inner lauresLandPages';
        break;
    case 'lp-dom-bosco' :
        $file = 'page_lp_domBosco.php';
        $title_page = $title;
        $classOnBody = 'p-inner lauresLandPages';
        break;
    case 'lp-letron' :
        $file = 'page_lp_letron.php';
        $title_page = $title;
        $classOnBody = 'p-inner lauresLandPages';
        break;
    case 'lp-leotack' :
        $file = 'page_lp_leotack.php';
        $title_page = $title;
        $classOnBody = 'p-inner lauresLandPages';
        break;

    // 404
    default :
        header("HTTP/1.0 404 Not Found");
        $file = 'page_404.php';
        $title_page = 'Página não encontrada - '.$title;
        break;
}

// head + nav
include("parts/defaults/head.php");
include("parts/layout/l-nav.php");

// render page content
include($file);

// footer + end
//include("parts/components/c_animationCarnaval.php");
include("parts/layout/l-footer.php");
include("parts/defaults/end.php");
?>


