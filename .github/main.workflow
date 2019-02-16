workflow "Lint" {
  on = "push"
  resolves = [
    "lint frontend",
    "lint backend",
  ]
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
