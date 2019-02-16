workflow "Lint" {
  on = "push"
  resolves = ["lint frontend"]
}

action "yarn install" {
  uses = "actions/bin/sh@master"
  args = "yarn"
}

action "lint frontend" {
  uses = "actions/bin/sh@master"
  needs = ["yarn install"]
  args = "yarn workspace frontend lint"
}
