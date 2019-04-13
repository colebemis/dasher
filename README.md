# Dasher

Create flexible dashboards with GitHub queries

## Local Development

```shell
# Clone repo
git clone https://github.com/colebemis/dasher.git
cd dasher

# Start Prisma server and launch connected database
pushd backend/prisma
docker-compose up --detach
popd

# Install dependencies
yarn install

# Start frontend and backend dev servers
yarn dev
```
