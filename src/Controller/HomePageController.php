<?php

namespace App\Controller;

use App\Repository\HomePageRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class HomePageController extends AbstractController {
    /**
     * @param HomePageRepository $homePageRepository
     * @return Response
     * @Route("/api/homepage", name="homepage", methods={"GET"})
     */
    public function homePage(HomePageRepository $homePageRepository): Response {

        $homepage = $homePageRepository->find(1);

        return $this->json(
            $homepage,
            Response::HTTP_OK
        );
    }
}