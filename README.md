# Doodle Minimum User-Testable Implementation

Use `npm start` to run.

The key distinguishing features I noted/implemented are as follows:
- Times are presented as individual blocks, as opposed to a UI where you drag across time blocks to indicate availabilty
- The user has the options "Yes", "If need be", and "No" for each time. This information is also displayed via colors and icons
- Once the user submits, there is a confirmation window allowing the user to enter their details, then a message indicating that the user has submitted.
    - For this particular implementation, I opted to use a popup as opposed to a whole new confirmation page.
- Availabilities of other users are laid out in rows below the user's input area; they can easily see who has selected what time