-- Table: public.shorts_socialnetwork

-- DROP TABLE IF EXISTS public.shorts_socialnetwork;

CREATE TABLE IF NOT EXISTS public.shorts_socialnetwork
(
    id integer NOT NULL DEFAULT nextval('shorts_socialnetwork_id_seq'::regclass),
    user_id integer NOT NULL,
    nombrearchivo character varying COLLATE pg_catalog."default" NOT NULL,
    descripcion text COLLATE pg_catalog."default" NOT NULL,
    fecha_alta timestamp without time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
    fecha_actualizacion timestamp without time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT pk_shorts_socialnetwork PRIMARY KEY (id),
    CONSTRAINT fk_shorts_socialnetwork FOREIGN KEY (user_id)
        REFERENCES public.usuarios_socialnetwork (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.shorts_socialnetwork
    OWNER to postgres;