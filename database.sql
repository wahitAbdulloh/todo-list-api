CREATE DATABASE "todo_list_db";

CREATE TABLE "todo" (
  "id" varchar(100) PRIMARY KEY,
  "title" varchar(255),
  "text" text,
  "create_date" timestamp,
  "update_date" timestamp
);