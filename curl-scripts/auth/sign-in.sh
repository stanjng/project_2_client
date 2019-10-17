#!/bin/bash

curl "https://damp-refuge-43009.herokuapp.com/sign-in" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": "'"${EMAIL}"'",
      "password": "'"${PASSWORD}"'"
    }
  }'

echo

# EMAIL=s@j.com PASSWORD=slj sh curl-scripts/auth/sign-in.sh
