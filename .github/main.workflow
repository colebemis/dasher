workflow "Lint" {
  on = "push"
  resolves = ["lint frontend"]
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
