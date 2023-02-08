CREATE DATABASE PROBLEM_7;

CREATE TABLE IF NOT EXISTS balances (
	id SERIAL PRIMARY KEY,
	address VARCHAR(255) NOT NULL,
	denom VARCHAR(10),
	amount FLOAT,
	block_height INTEGER 
);

CREATE TABLE IF NOT EXISTS trades (
	id SERIAL PRIMARY KEY,
	address VARCHAR(255) NOT NULL,
	denom VARCHAR(10),
	amount FLOAT,
	block_height INTEGER 
);

INSERT INTO balances (address, denom, amount, block_height) VALUES ('0xb5d4f343412dc8efb6ff599d790074d0f1e8d430', 'usdc', 50000000000000, 733755);
INSERT INTO balances (address, denom, amount, block_height) VALUES ('0x0020c5222a24e4a96b720c06b803fb8d34adc0af', 'swth', -20000000, 733757);
INSERT INTO balances (address, denom, amount, block_height) VALUES ('0xd1d8b2aae2ebb2acf013b803bc3c24ca1303a392', 'usdc', -50000000000000, 733855);

INSERT INTO trades (address, denom, amount, block_height) VALUES ('0xb5d4f343412dc8efb6ff599d790074d0f1e8d430', 'swth', 400000000000, 733756);
INSERT INTO trades (address, denom, amount, block_height) VALUES ('0x0020c5222a24e4a96b720c06b803fb8d34adc0af', 'usdc', 3500000000000, 733757);
INSERT INTO trades (address, denom, amount, block_height) VALUES ('0xd1d8b2aae2ebb2acf013b803bc3c24ca1303a392', 'swth', 72000000000000, 733858);
