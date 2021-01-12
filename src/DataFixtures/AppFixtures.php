<?php

namespace App\DataFixtures;

use App\Factory\HaikuFactory;
use App\Factory\HomePageFactory;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class AppFixtures extends Fixture
{
    public function load (ObjectManager $manager) {
        $h = 10;

        for($i = 0; $i <= $h; $i++){
            $haiku = HaikuFactory::new()->create()->object();
            $manager->persist($haiku);
        }
        $homepage = HomePageFactory::new([
            'title' => 'fu un kai',
            'subTitle' => 'Haiku\'s Snapshots, My Feelings Over Clouds',
            'presentation' => 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'

        ])->create()->object();
        $manager->persist($homepage);
        $manager->flush();

    }
}
