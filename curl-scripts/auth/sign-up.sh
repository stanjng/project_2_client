#!/bin/bash

curl "https://damp-refuge-43009.herokuapp.com/sign-up" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": "'"${EMAIL}"'",
      "password": "'"${PASSWORD}"'",
      "password_confirmation": "'"${PASSWORD}"'"
    }
  }'

echo

# EMAIL=s@j.com PASSWORD=sj PASSWORD=sj sh curl-scripts/auth/sign-up.sh
