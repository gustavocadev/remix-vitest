# Welcome to Remix + Vite!

📖 See the [Remix docs](https://remix.run/docs) and the [Remix Vite docs](https://remix.run/docs/en/main/future/vite) for details on supported features.

# Testing

If you want to use a real database like postgres, you probly want to use a docker container just to create it and then delete it like a sqlite database 👀.

But... Why docker? 🤔

Well, if you wanna install postgres in your machine, you will need to install a lot of things, like a server, a client, and a lot of other things. But with docker, you can just install the container not in your machine, but in a virtual machine, so you can just delete it when you don't need it anymore(like just sqlite).

## Docker

You propably need an env different from the production one, so you can create a `.env.test` file and then use it in the `docker-compose.yml` file.

## Production

For the production, you can use a database like supabase, neon database, planetscale, or any other database that you want to use.
