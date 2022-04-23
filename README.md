First of all go ahead and clone this repository

=== git clone https://github.com/Nishant-Narsale/notes-app.git

Then open your command prompt at notes-app/ directory
Paste following command to download all node packages

make sure you have npm installed, if not download it from https://nodejs.org/en/download/

=== npm -i

You are ready to run project

=== npm start

But it will give you an data fetching error
As, we are not using our api yet, It is a normal json server you have to start
for that insert following commands

=== npm install -g json-server
=== json-server --watch db.json --port 5000

Now it will not generate an error
But data is not coming from a backend it is coming from a json file i.e, db.json

You can create your own api for CRUD operation over Notes table.
