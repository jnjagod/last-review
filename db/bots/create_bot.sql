insert into bot
(user_id, bot_name, attack, health)
values (${user_id}, ${bot_name}, ${attack}, ${health})
returning *;