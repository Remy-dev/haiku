<?php

namespace App\Controller;

use App\Repository\HaikuRepository;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class HaikuController extends AbstractController
{
    /**
     * @Route("/api/haikus/list", name="haiku_list", methods={"GET"})
     * @param HaikuRepository $haikuRepository
     */
    public function list(HaikuRepository $haikuRepository) : Response
    {

        $haikus = $haikuRepository->findAll();

        return $this->json(
            $haikus,
            Response::HTTP_OK
        );

    }


}
