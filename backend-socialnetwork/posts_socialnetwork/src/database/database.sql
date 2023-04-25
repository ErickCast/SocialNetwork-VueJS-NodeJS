CREATE TABLE posts_socialnetwork (
    id SERIAL,
    usuario_id character varying(200) NOT NULL,
    descripcion TEXT NOT NULL,
    archivo TEXT,
    fecha_alta timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
    fecha_actualizacion timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT posts_pkey PRIMARY KEY (id)
)