# Dasher

Create flexible dashboards with GitHub queries

## Local Development

```shell
# Clone repo
git clone https://github.com/colebemis/dasher.git
cd dasher

# Install dependencies
yarn install

# Start Prisma server and launch connected database
pushd backend/prisma
docker-compose up --detach
popd

# Deploy Prisma datamodel
pushd backend
yarn deploy:prisma
popd

# Start frontend and backend dev servers
yarn dev
```
