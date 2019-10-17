# Ex: ID=idgoeshere TOKEN=tokengoeshere sh curl-scripts/examples/destroy.sh

curl "https://damp-refuge-43009.herokuapp.com/smoothies/${ID}" \
  --include \
  --request DELETE \
  --header "Authorization: Token token=${TOKEN}" \

echo

# ID=1 TOKEN="BAhJIiUzZWMwMGZhNzNiNjZlMTAzYjQ0MDE0ZTA2ZjhmZWVjMQY6BkVG--a4e084fe6e4a25eaf51a10e803aeed964bd590d8" sh curl-scripts/smoothies/destroy.sh
