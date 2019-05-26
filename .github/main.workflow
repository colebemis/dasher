workflow "Lint and test" {
  resolves = [
    "lint frontend",
    "test backend",
  ]
  on = "push"
}

workflow "Deploy" {
  resolves = [
    "deploy prisma service",
    "deploy",
  ]
  on = "push"
}

action "install" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  args = "install"
  runs = "yarn"
}

action "lint frontend" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  args = "workspace frontend lint"
  runs = "yarn"
  needs = ["install"]
}

action "lint backend" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  runs = "yarn"
  args = "workspace backend lint"
  needs = ["install"]
}

action "test backend" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  needs = ["lint backend"]
  runs = "yarn"
  args = "workspace backend test"
}

action "deploy prisma service" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  needs = ["install"]
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

action "deploy" {
  uses = "actions/zeit-now@5c51b26db987d15a0133e4c760924896b4f1512f"
  needs = ["install"]
  secrets = [
    "GITHUB_TOKEN",
    "ZEIT_TOKEN",
    "APP_SECRET",
    "PRISMA_SECRET",
    "GH_CLIENT_SECRET",
  ]
  env = {
    PRISMA_ENDPOINT = "https://dasher-9598c5ecbe.herokuapp.com/dasher/prod"
    GH_CLIENT_ID = "6394b4fd5f4f0606b2f7"
  }
  args = "-e GITHUB_TOKEN -e GH_CLIENT_ID -e GH_CLIENT_SECRET -e APP_SECRET -e PRISMA_ENDPOINT -e PRISMA_SECRET"
}
