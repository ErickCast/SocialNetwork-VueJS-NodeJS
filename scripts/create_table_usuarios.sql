-- Table: public.usuarios_socialnetwork

-- DROP TABLE IF EXISTS public.usuarios_socialnetwork;

CREATE TABLE IF NOT EXISTS public.usuarios_socialnetwork
(
    id integer NOT NULL DEFAULT nextval('usuarios_socialnetwork_id_seq'::regclass),
    name character varying(200) COLLATE pg_catalog."default" NOT NULL,
    last_names character varying(200) COLLATE pg_catalog."default" NOT NULL,
    username character varying(150) COLLATE pg_catalog."default" NOT NULL,
    tipo_usuario integer NOT NULL DEFAULT 1,
    fecha_alta timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
    fecha_actualizacion timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
    email character varying(255) COLLATE pg_catalog."default" NOT NULL,
    password text COLLATE pg_catalog."default" NOT NULL DEFAULT '1234'::character varying,
    CONSTRAINT usuarios_pkey PRIMARY KEY (id),
    CONSTRAINT unique_email UNIQUE (email)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.usuarios_socialnetwork
    OWNER to postgres;