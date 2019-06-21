update bot
set 
    bot_name = ${bot_name},
    attack = ${attack},
    health = ${health}
 where id = ${id};

select * from bot;