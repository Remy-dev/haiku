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
     * @Route("/api/homepage/haikus/list", name="homepage_haiku_list", methods={"GET"})
     * @param HaikuRepository $haikuRepository
     */
    public function list(HaikuRepository $haikuRepository) : Response
    {
        $limit = 6;
        $haikus = $haikuRepository->findBy([], ['id' => 'DESC'],  $limit);

        return $this->json(
            $haikus,
            !empty($haikus) ? Response::HTTP_OK : Response::HTTP_NO_CONTENT
        );

    }


}
