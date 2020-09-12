:: USER ::

USE lagoon;

INSERT INTO user 
(user_id, created, first_name, last_name, password, user_name)
VALUES 
(0, curdate(), 'João', 'Luís', '123', 'jl');

:: PHOTO ::

USE lagoon;

INSERT INTO 
photo (photo_id, created, description, image_name, likes, photo_name, user_user_id)
VALUES
(1, curdate(), "description 1", '1.jpg', 0, 'description 1', 0);

INSERT INTO 
photo (photo_id, created, description, image_name, likes, photo_name, user_user_id)
VALUES
(2, curdate(), "description 2", '2.jpg', 0, 'description 2', 0);

INSERT INTO 
photo (photo_id, created, description, image_name, likes, photo_name, user_user_id)
VALUES
(3, curdate(), "description 3", '3.jpg', 0, 'description 3', 0);

INSERT INTO 
photo (photo_id, created, description, image_name, likes, photo_name, user_user_id)
VALUES
(4, curdate(), "description 4", '4.jpg', 0, 'description 4', 0);

INSERT INTO 
photo (photo_id, created, description, image_name, likes, photo_name, user_user_id)
VALUES
(5, curdate(), "description 5", '5.jpg', 0, 'description 5', 0);

INSERT INTO 
photo (photo_id, created, description, image_name, likes, photo_name, user_user_id)
VALUES
(6, curdate(), "description 6", '6.jpg', 0, 'description 6', 0);