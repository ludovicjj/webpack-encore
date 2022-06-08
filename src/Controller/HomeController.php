<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class HomeController
{
    #[Route('/', name:'homepage')]
    public function home(): Response
    {
        return new Response('hello world');
    }
}