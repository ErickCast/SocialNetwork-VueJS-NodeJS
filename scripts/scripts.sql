 SELECT "id", "name", "last_names", "email", "username", "tipo_usuario", "fecha_alta", "fecha_actualizacion" FROM "usuarios_socialnetwork WHERE id = 15" AS "usuarios_socialnetwork" WHERE "usuarios_socialnetwork"."name" LIKE '%Eric%'
 TRUNCATE TABLE usuarios_socialnetwork RESTART IDENTITY;
 ALTER SEQUENCE id RESTART WITH 1453
 
 SELECT * FROM usuarios_socialnetwork WHERE id = 15
 
 ALTER TABLE usuarios_socialnetwork ALTER COLUMN password TYPE bytea USING password::bytea
 
 SELECT "id", "name", "last_names", "email", "username", "tipo_usuario", "fecha_alta", "fecha_actualizacion" FROM "usuarios_socialnetwork" AS "usuarios_socialnetwork" WHERE "usuarios_socialnetwork"."email" = 'fulanito@hotmail.com' AND "usuarios_socialnetwork"."id" NOT IN ('15') LIMIT 1;
 
 select * from pg_available_extensions
 select * from pg_extension