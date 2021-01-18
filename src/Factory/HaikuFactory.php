<?php

namespace App\Factory;

use App\Entity\Haiku;
use App\Repository\HaikuRepository;
use Zenstruck\Foundry\RepositoryProxy;
use Zenstruck\Foundry\ModelFactory;
use Zenstruck\Foundry\Proxy;

/**
 * @method static Haiku|Proxy findOrCreate(array $attributes)
 * @method static Haiku|Proxy random()
 * @method static Haiku[]|Proxy[] randomSet(int $number)
 * @method static Haiku[]|Proxy[] randomRange(int $min, int $max)
 * @method static HaikuRepository|RepositoryProxy repository()
 * @method Haiku|Proxy create($attributes = [])
 * @method Haiku[]|Proxy[] createMany(int $number, $attributes = [])
 */
final class HaikuFactory extends ModelFactory
{
    public function __construct()
    {
        parent::__construct();

        // TODO inject services if required (https://github.com/zenstruck/foundry#factories-as-services)
    }

    protected function getDefaults(): array
    {
        return [
            'title' => self::faker()->unique()->sentence,
            'content' => self::faker()->sentence,

        ];
    }

    protected function initialize(): self
    {
        // see https://github.com/zenstruck/foundry#initialization
        return $this
            // ->afterInstantiate(function(Haiku $haiku) {})
        ;
    }

    protected static function getClass(): string
    {
        return Haiku::class;
    }
}
