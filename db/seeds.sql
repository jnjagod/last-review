    
create table bot_user
(
    user_id serial primary key,
    email varchar,
    password varchar
)

create table bots (
    id serial primary key,
    user_id int references bot_user(user_id),
    bot_name varchar(255),
    attack int,
    health int
)