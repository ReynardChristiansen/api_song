
# API Song

The Song API provides endpoints to access and manage song information. It allows developers to get, update, delete, and add songs easily.

## Features


- Get all workouts (GET): https://api-song-khaki.vercel.app/api/songs

- Get workout by ID (GET): https://api-song-khaki.vercel.app/api/songs/{id}

- Update workout (PATCH): https://api-song-khaki.vercel.app/api/songs/{id}

- Delete workout by ID (DELETE): https://api-song-khaki.vercel.app/api/songs/{id}

- Add workout (POST): https://api-song-khaki.vercel.app/api/songs

Updating and adding a workout require a request body in the following format:

    {
        "song_id": STRING,
        "song_name": STRING,
        "song_url": STRING,
        "song_image": STRING
    }



## Feedback

If you have any feedback, please reach out to me at reynard.satria@gmail.com

