<?php

namespace App\DataFixtures;

use App\Factory\HaikuFactory;
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

        $manager->flush();

    }
}
