<?php

namespace App\Factory;

use App\Entity\Theme;
use App\Repository\ThemeRepository;
use Zenstruck\Foundry\RepositoryProxy;
use Zenstruck\Foundry\ModelFactory;
use Zenstruck\Foundry\Proxy;

/**
 * @method static Theme|Proxy findOrCreate(array $attributes)
 * @method static Theme|Proxy random()
 * @method static Theme[]|Proxy[] randomSet(int $number)
 * @method static Theme[]|Proxy[] randomRange(int $min, int $max)
 * @method static ThemeRepository|RepositoryProxy repository()
 * @method Theme|Proxy create($attributes = [])
 * @method Theme[]|Proxy[] createMany(int $number, $attributes = [])
 */
final class ThemeFactory extends ModelFactory
{
    public function __construct()
    {
        parent::__construct();

        // TODO inject services if required (https://github.com/zenstruck/foundry#factories-as-services)
    }

    protected function getDefaults(): array
    {
        return [
           'title' => self::faker()->word
        ];
    }

    protected function initialize(): self
    {
        // see https://github.com/zenstruck/foundry#initialization
        return $this
            // ->afterInstantiate(function(Theme $theme) {})
        ;
    }

    protected static function getClass(): string
    {
        return Theme::class;
    }
}
