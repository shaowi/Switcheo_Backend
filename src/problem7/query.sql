SELECT T.address FROM trades T, balances B
WHERE B.amount >= 500 AND T.block_height > 730000;