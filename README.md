## Headless CMS

A selfhosted headless cms for blogging websites. 


## Installation

First spin up `postgres` docker image

```
docker run --env-file ./core/.env -p 5432:5432 postgres
```

### Core

```
# Navigate to core directory
cd core

# Install required dependancies
pnpm install

# Run postgres migration (Make sure you have postgres docker image running)
pnpm run migrate:dev

# Start dev server
pnpm run start:dev
```

### Admin Frontend

```
# Navigate to admin directory
cd admin

# Install required dependancies
pnpm install

# Start dev server
pnpm run dev
```

