<?php

namespace App\Entity;

use App\Repository\ThemeRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Serializer\Annotation\MaxDepth;

/**
 * @ORM\Entity(repositoryClass=ThemeRepository::class)
 */
class Theme
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     * @Groups ("list_theme")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups ("list_theme")
     */
    private $title;

    /**
     * @ORM\OneToMany(targetEntity=Haiku::class, mappedBy="theme")
     * @MaxDepth(1)
     */
    private $haikus;

    public function __construct()
    {
        $this->haikus = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(string $title): self
    {
        $this->title = $title;

        return $this;
    }

    /**
     * @return Collection|Haiku[]
     */
    public function getHaikus(): Collection
    {
        return $this->haikus;
    }

    public function addHaiku(Haiku $haiku): self
    {
        if (!$this->haikus->contains($haiku)) {
            $this->haikus[] = $haiku;
            $haiku->setTheme($this);
        }

        return $this;
    }

    public function removeHaiku(Haiku $haiku): self
    {
        if ($this->haikus->removeElement($haiku)) {
            // set the owning side to null (unless already changed)
            if ($haiku->getTheme() === $this) {
                $haiku->setTheme(null);
            }
        }

        return $this;
    }
}
