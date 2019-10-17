# Ex: TOKEN=tokengoeshere ID=idgoeshere TEXT=textgoeshere sh curl-scripts/examples/update.sh

curl "https://damp-refuge-43009.herokuapp.com/smoothies/${ID}" \
  --include \
  --request PATCH \
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
        "description": "'"${DESCRIPTION}"'",
        "user_id": "'"${USER}"'"
    }
  }'

  echo

# ID=3 TOKEN="BAhJIiUzZWMwMGZhNzNiNjZlMTAzYjQ0MDE0ZTA2ZjhmZWVjMQY6BkVG--a4e084fe6e4a25eaf51a10e803aeed964bd590d8" NAME='StrawBanana Delight' BASE='Oat Milk' BOOSTER='Collagen Powder' FRUIT='Strawberries, Banana' VEGETABLE='Spinach' THICKENER='Almond Butter' DESCRIPTION='Strawberry and banana deliciousness!' USER=1 sh curl-scripts/smoothies/update.sh
