#!/bin/bash

curl "https://damp-refuge-43009.herokuapp.com/sign-out" \
  --include \
  --request DELETE \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}"

echo

# TOKEN=BAhJIiVlZGJhOTIyM2NjYTU2NGQ5Njg4MzVmMDJjNzNjYjBiYgY6BkVG--d0af4816c51fe7d7aadbf6e81bb037b2bf3464d2 sh curl-scripts/auth/sign-out.sh
