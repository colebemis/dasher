workflow "New workflow" {
  on = "push"
  resolves = ["Install"]
}

action "Install" {
  uses = "docker://node:10"
  runs = "yarn"
}
