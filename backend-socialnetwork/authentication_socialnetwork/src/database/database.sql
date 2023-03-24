CREATE TABLE usuarios_socialnetwork (
    id integer SERIAL,
    name character varying(200) NOT NULL,
    last_names character varying(200) NOT NULL,
    username character varying(150) NOT NULL,
    tipo_usuario character varying NOT NULL DEFAULT 1
    fecha_alta timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
    fecha_actualizacion timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT usuarios_pkey PRIMARY KEY (id)
)