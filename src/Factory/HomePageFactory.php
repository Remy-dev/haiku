<?php

namespace App\Factory;

use App\Entity\HomePage;
use App\Repository\HomePageRepository;
use Zenstruck\Foundry\RepositoryProxy;
use Zenstruck\Foundry\ModelFactory;
use Zenstruck\Foundry\Proxy;

/**
 * @method static HomePage|Proxy findOrCreate(array $attributes)
 * @method static HomePage|Proxy random()
 * @method static HomePage[]|Proxy[] randomSet(int $number)
 * @method static HomePage[]|Proxy[] randomRange(int $min, int $max)
 * @method static HomePageRepository|RepositoryProxy repository()
 * @method HomePage|Proxy create($attributes = [])
 * @method HomePage[]|Proxy[] createMany(int $number, $attributes = [])
 */
final class HomePageFactory extends ModelFactory
{
    public function __construct()
    {
        parent::__construct();

        // TODO inject services if required (https://github.com/zenstruck/foundry#factories-as-services)
    }

    protected function getDefaults(): array
    {
        return [
            // TODO add your default values here (https://github.com/zenstruck/foundry#model-factories)
        ];
    }

    protected function initialize(): self
    {
        // see https://github.com/zenstruck/foundry#initialization
        return $this
            // ->afterInstantiate(function(HomePage $homePage) {})
        ;
    }

    protected static function getClass(): string
    {
        return HomePage::class;
    }
}
