var interpret = function (command) {
  return command.replace("/()/", "o").replace("/(al)/", "al");
};

let command = "G()(al)";

console.log(interpret(command));
