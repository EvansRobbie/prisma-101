-- AlterTable
CREATE SEQUENCE users_id_seq;
ALTER TABLE "Users" ALTER COLUMN "id" SET DEFAULT nextval('users_id_seq');
ALTER SEQUENCE users_id_seq OWNED BY "Users"."id";
