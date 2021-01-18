<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210118142427 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SEQUENCE theme_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE TABLE theme (id INT NOT NULL, title VARCHAR(255) NOT NULL, PRIMARY KEY(id))');
        $this->addSql('ALTER TABLE haiku ADD theme_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE haiku DROP theme');
        $this->addSql('ALTER TABLE haiku ADD CONSTRAINT FK_D9A9C8759027487 FOREIGN KEY (theme_id) REFERENCES theme (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('CREATE INDEX IDX_D9A9C8759027487 ON haiku (theme_id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SCHEMA public');
        $this->addSql('ALTER TABLE haiku DROP CONSTRAINT FK_D9A9C8759027487');
        $this->addSql('DROP SEQUENCE theme_id_seq CASCADE');
        $this->addSql('DROP TABLE theme');
        $this->addSql('DROP INDEX IDX_D9A9C8759027487');
        $this->addSql('ALTER TABLE haiku ADD theme VARCHAR(255) DEFAULT NULL');
        $this->addSql('ALTER TABLE haiku DROP theme_id');
    }
}
