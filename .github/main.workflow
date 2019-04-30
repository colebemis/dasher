workflow "Lint, test and deploy" {
  resolves = [
    "lint frontend",
    "test backend",
    "deploy prisma service",
  ]
  on = "push"
}

action "yarn install" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  args = "install"
  runs = "yarn"
}

action "lint frontend" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  needs = ["yarn install"]
  args = "workspace frontend lint"
  runs = "yarn"
}

action "lint backend" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  needs = ["yarn install"]
  runs = "yarn"
  args = "workspace backend lint"
}

action "test backend" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  needs = ["lint backend"]
  runs = "yarn"
  args = "workspace backend test"
}

action "on master branch" {
  uses = "actions/bin/filter@3c0b4f0e63ea54ea5df2914b4fabf383368cd0da"
  needs = ["yarn install"]
  args = "branch master"
}

action "deploy prisma service" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  needs = ["on master branch"]
  runs = "yarn"
  args = "workspace backend deploy:prisma"
  secrets = [
    "PRISMA_SECRET",
    "PRISMA_MANAGEMENT_API_SECRET",
  ]
  env = {
    PRISMA_ENDPOINT = "https://dasher-9598c5ecbe.herokuapp.com/dasher/prod"
  }
}
