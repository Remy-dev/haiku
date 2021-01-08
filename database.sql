--
-- PostgreSQL database dump
--

-- Dumped from database version 13.1 (Debian 13.1-1.pgdg90+1)
-- Dumped by pg_dump version 13.0 (Debian 13.0-1.pgdg90+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

ALTER TABLE ONLY public.home_page DROP CONSTRAINT home_page_pkey;
ALTER TABLE ONLY public.haiku DROP CONSTRAINT haiku_pkey;
ALTER TABLE ONLY public.doctrine_migration_versions DROP CONSTRAINT doctrine_migration_versions_pkey;
DROP SEQUENCE public.home_page_id_seq;
DROP TABLE public.home_page;
DROP SEQUENCE public.haiku_id_seq;
DROP TABLE public.haiku;
DROP TABLE public.doctrine_migration_versions;
SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: doctrine_migration_versions; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.doctrine_migration_versions (
    version character varying(191) NOT NULL,
    executed_at timestamp(0) without time zone DEFAULT NULL::timestamp without time zone,
    execution_time integer
);


--
-- Name: haiku; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.haiku (
    id integer NOT NULL,
    title character varying(255) NOT NULL,
    content text NOT NULL,
    created_at timestamp(0) without time zone NOT NULL,
    updated_at timestamp(0) without time zone NOT NULL
);


--
-- Name: haiku_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.haiku_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: home_page; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.home_page (
    id integer NOT NULL,
    title character varying(255) NOT NULL,
    sub_title character varying(255) NOT NULL,
    presentation text,
    image character varying(255) DEFAULT NULL::character varying
);


--
-- Name: home_page_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.home_page_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Data for Name: doctrine_migration_versions; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.doctrine_migration_versions (version, executed_at, execution_time) FROM stdin;
DoctrineMigrations\\Version20210107152049	2021-01-07 15:30:41	158
\.


--
-- Data for Name: haiku; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.haiku (id, title, content, created_at, updated_at) FROM stdin;
\.


--
-- Data for Name: home_page; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.home_page (id, title, sub_title, presentation, image) FROM stdin;
\.


--
-- Name: haiku_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.haiku_id_seq', 1, false);


--
-- Name: home_page_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.home_page_id_seq', 1, false);


--
-- Name: doctrine_migration_versions doctrine_migration_versions_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.doctrine_migration_versions
    ADD CONSTRAINT doctrine_migration_versions_pkey PRIMARY KEY (version);


--
-- Name: haiku haiku_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.haiku
    ADD CONSTRAINT haiku_pkey PRIMARY KEY (id);


--
-- Name: home_page home_page_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.home_page
    ADD CONSTRAINT home_page_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

