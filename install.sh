#! /bin/bash

echo "==== START ===="

psql -U postgres -c "DROP DATABASE IF EXISTS nextjs_app1_booklog"
psql -U postgres -c "CREATE DATABASE nextjs_app1_booklog WITH ENCODING='UTF8' LC_COLLATE='ja_JP.utf8' LC_CTYPE='ja_JP.utf8' TEMPLATE=template0"

echo "==== nextjs_app1_booklog ===="
echo "==== DATABASE CREATED ===="

cp ./.env_sample ./.env
echo "==== ENV CREATED ===="

npx prisma migrate dev --name init
echo "==== DATABASE MIGRATED ===="

npx prisma db seed
echo "==== DATABASE INITIALIZED ===="

echo "==== COMPLETED ===="
