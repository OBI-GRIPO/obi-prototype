# obi

docker stack for OBI

first set variables on plain.cnf  

then encode secrets with a passphrase

`./encsecrets.py yourpassphrase`

and start with 

`./up.py yourpassphrase | docker stack deploy --compose-file /dev/stdin OBI`

(do not use docker stack directly)

