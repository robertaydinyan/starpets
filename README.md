# Project README

## Setup Instructions

1. **Configure Database:**  
   Change `config/config.json` to set your database configuration.

2. **Run Migrations:**  
   Execute the following command to migrate your database schema:
npm run migrate

3. **Start the Application:**  
Launch the application with the following command:
node app.js

## Modifying User Balance

To modify a user's balance, use a `PUT` request with `curl` as follows:

```bash
curl --location --request PUT 'localhost:3000/api/users/1/updateBalance' \
--header 'Content-Type: application/json' \
--data '{
 "amount": 5000
}
1 is the default user ID and 5000 with the desired amount to update the user's balance accordingly.
