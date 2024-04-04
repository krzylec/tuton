UPDATE role
SET roleName = 'USER'
WHERE roleName = 'ROLE_USER';
UPDATE role
SET roleName = 'ADMIN'
WHERE roleName = 'ROLE_ADMIN';