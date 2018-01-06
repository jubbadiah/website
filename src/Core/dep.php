<?php

$container = $app->getContainer();

$container['view'] = function ($container) {
    $view = new \Slim\Views\Twig('../src/Views/', [
        // 'cache' => 'path/to/cache'
    ]);
    
    $basePath = rtrim(str_ireplace('index.php', '', $container['request']->getUri()->getBasePath()), '/');
    $view->addExtension(new Slim\Views\TwigExtension($container['router'], $basePath));

    return $view;
};

$container['HomeController'] = function($container) {
    $view = $container->get('view');
    return new \Jubby\Controller\HomeController($view);
};
