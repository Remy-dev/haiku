<?php

namespace App\Repository;

use App\Entity\Haiku;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Haiku|null find($id, $lockMode = null, $lockVersion = null)
 * @method Haiku|null findOneBy(array $criteria, array $orderBy = null)
 * @method Haiku[]    findAll()
 * @method Haiku[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class HaikuRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Haiku::class);
    }

    // /**
    //  * @return Haiku[] Returns an array of Haiku objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('h')
            ->andWhere('h.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('h.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Haiku
    {
        return $this->createQueryBuilder('h')
            ->andWhere('h.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
