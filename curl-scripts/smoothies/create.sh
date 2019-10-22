#!/bin/bash

curl "https://damp-refuge-43009.herokuapp.com/smoothies" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "smoothy": {
      "name": "'"${NAME}"'",
      "base": "'"${BASE}"'",
      "booster": "'"${BOOSTER}"'",
      "fruit": "'"${FRUIT}"'",
      "vegetable": "'"${VEGETABLE}"'",
      "thickener": "'"${THICKENER}"'",
      "user_id": "'"${USER}"'"
    }
  }'

echo

# TOKEN="BAhJIiUzZWMwMGZhNzNiNjZlMTAzYjQ0MDE0ZTA2ZjhmZWVjMQY6BkVG--a4e084fe6e4a25eaf51a10e803aeed964bd590d8" NAME='Mocha Choca' BASE='Chocolate Soy Milk, Coffee' BOOSTER='Spirulina Powder, Chocolate Protein' FRUIT='n/a' VEGETABLE='Kale' THICKENER='Oats' DESCRIPTION='Strawberry and banana goodness!' USER=1 sh curl-scripts/smoothies/create.sh
