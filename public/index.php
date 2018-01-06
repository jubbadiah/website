<?php

require '../vendor/autoload.php';

$settings = require '../src/Core/settings.php';

$app = new \Slim\App($settings);

require '../src/Core/dep.php';

require '../src/Core/routes.php';

$app->run();
