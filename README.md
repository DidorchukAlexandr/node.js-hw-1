Отримуємо і виводимо весь список контактів у вигляді таблиці (console.table)
node index.js --action="list" https://monosnap.com/file/E65Gz9jiSLhNhXbuPQpaHE7G2zWrvh;

Отримуємо контакт по id
node index.js --action="get" --id=5 https://monosnap.com/file/TsWQ7s35eDbnyo1LJXP9DXB98kRlMA;

Додаємо контакт
node index.js --action="add" --name="Mango" --email="mango@gmail.com" --phone="322-22-22"
https://monosnap.com/file/9oEicm9QJPxeIhfVt651Enx7vTLmqk;

Видаляємо контакт
node index.js --action="remove" --id=3 https://monosnap.com/file/GAxFB6Cny3ZVafadV0m52D8u15dFLa;
