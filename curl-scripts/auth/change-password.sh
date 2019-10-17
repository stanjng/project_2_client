#!/bin/bash

curl "https://damp-refuge-43009.herokuapp.com/change-password" \
  --include \
  --request PATCH \
  --header "Authorization: Token token=${TOKEN}" \
  --header "Content-Type: application/json" \
  --data '{
    "passwords": {
      "old": "'"${OLDPW}"'",
      "new": "'"${NEWPW}"'"
    }
  }'

echo

# TOKEN=BAhJIiU1MjQ3YjI2ZTc1YTQ3ZWQ4ZGQ3MzBkMjhkNWEwZmE1NAY6BkVG--7df330aa1ded04e08adc547102ed2e249c94d507 OLDPW=sj NEWPW=slj sh curl-scripts/auth/change-password.sh
