DROP TABLE shorts_socialnetwork;
CREATE TABLE shorts_socialnetwork(
	id SERIAL,
	id_usuario INT NOT NULL,
	descripcion TEXT,
	nombre_archivo TEXT NOT NULL,
	esPrivado BOOLEAN NOT NULL DEFAULT FALSE,
	fecha_alta timestamp without time zone NOT NULL DEFAULT '1900-01-01 00:00:00'::timestamp without time zone,
	fecha_actualizacion timestamp without time zone NOT NULL DEFAULT '1900-01-01 00:00:00'::timestamp without time zone,
	
	CONSTRAINT pk_shorts PRIMARY KEY (id),
	CONSTRAINT pk_shorts_user FOREIGN KEY(id_usuario) REFERENCES usuarios_socialnetwork(id)
	
	
)

ALTER TABLE shorts_socialnetwork MODIFY COLUMN
ALTER TABLE shorts_socialnetwork ALTER COLUMN id TYPE SERIAL;

INSERT INTO shorts_socialnetwork (id, id_usuario, descripcion, nombre_archivo, fecha_alta, fecha_actualizacion, esprivado)
VALUES(NULL,5, 'El short', 'short.zip', NOW(), NOW(), false)


INSERT INTO \"shorts_socialnetwork\" (\"id\",\"id_usuario\",\"descripcion\",\"nombre_archivo\",\"esPrivado\") VALUES ($1,$2,$3,$4,$5) RETURNING \"id\",\"id_usuario\",\"descripcion\",\"nombre_archivo\",\"fecha_alta\",\"fecha_actualizacion\",\"esPrivado\



SELECT * FROM usuarios_socialnetwork;
SELECT * FROM shorts_socialnetwork;
