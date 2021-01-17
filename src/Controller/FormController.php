<?php

namespace App\Controller;

use App\Entity\ContactMessage;

use Doctrine\ORM\EntityManagerInterface;
use Doctrine\Persistence\ObjectManager;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\Exception\NotEncodableValueException;
use Symfony\Component\Serializer\SerializerInterface;

class FormController extends AbstractController {

    private $serializer;

    public function __construct(SerializerInterface $serializer)
    {
       $this->serializer = $serializer;
    }

    /**
     * @Route("/api/contact/form", name="contact_form", methods={"POST"})
     */
    public function saveMessage (Request $request, EntityManagerInterface $manager) {
       if( 1000 >= strlen($request->getContent())) {
           try {
               $ContactMessage = $this->serializer->deserialize(
                   $request->getContent(),
                   ContactMessage::class,
                   'json'

               );
           } catch (NotEncodableValueException $e) {
               return $this->json([], Response::HTTP_BAD_REQUEST);
           }
       }

       if ($ContactMessage instanceof ContactMessage) {

          $manager->persist($ContactMessage);
          $manager->flush();

          return $this->json([], Response::HTTP_CREATED);
       }
    }
}
