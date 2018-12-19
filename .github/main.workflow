workflow "New workflow" {
  on = "push"
  resolves = ["Test"]
}

action "Test" {
  uses = "actions/npm@c555744"
  args = "test"
}
