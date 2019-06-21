select bot.attack, bot.id, bot.health, bot.bot_name, bot_user.email
from bot
join bot_user
on bot.user_id = bot_user.user_id
where id = $1;