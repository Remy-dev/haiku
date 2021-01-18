<?php

namespace App\Controller;

use App\Repository\ThemeRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ThemeController extends AbstractController {

    /**
     * @Route("/api/themes/list", name="themes_list", methods="GET")
     * @param ThemeRepository $repository
     * @return \Symfony\Component\HttpFoundation\JsonResponse
     */
    public function list(ThemeRepository $repository) {

        return $this->json(
            $repository->findAll(),
            Response::HTTP_OK,
            [],
            ['groups' => 'list_theme']
        );
    }


}
