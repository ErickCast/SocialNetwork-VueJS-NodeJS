SELECT * FROM usuarios_socialnetwork;
SELECT * FROM posts_socialnetwork;
SELECT id, usuario_id, descripcion, archivo, fecha_alta, fecha_actualizacion FROM posts_socialnetwork AS posts_socialnetwork;

ALTER TABLE posts_socialnetwork ALTER COLUMN usuario_id TYPE INTEGER USING usuario_id::integer;

ALTER TABLE posts_socialnetwork 
ADD CONSTRAINT fk_posts_usuarios 
FOREIGN KEY (usuario_id) 
REFERENCES usuarios_socialnetwork 
ON DELETE CASCADE ON UPDATE CASCADE;

INSERT INTO public.usuarios_socialnetwork(
	name, last_names, username, tipo_usuario, email, password)
	VALUES ('Erick', 'Castillo', 'ErickCast', 1, 'erick@admin.com', '123456');
	
INSERT INTO public.posts_socialnetwork(
	usuario_id, descripcion, archivo)
	VALUES (3, 'ALGO3', 'ALGO3.JPG');
	
CREATE TABLE posts_socialnetwork (
    id SERIAL NOT NULL,
    usuario_id character varying(200) NOT NULL,
    descripcion TEXT NOT NULL,
    archivo TEXT,
    fecha_alta timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
    fecha_actualizacion timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT posts_pkey PRIMARY KEY (id)
)