curl "https://damp-refuge-43009.herokuapp.com/smoothies/${ID}" \
  --include \
  --request GET \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \

echo

# ID=4 TOKEN="BAhJIiUzZWMwMGZhNzNiNjZlMTAzYjQ0MDE0ZTA2ZjhmZWVjMQY6BkVG--a4e084fe6e4a25eaf51a10e803aeed964bd590d8" sh curl-scripts/smoothies/show.sh
