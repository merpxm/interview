import { execGitCmd } from "run-git-command";

const gitCommand = "git log -p -25";
const execOptions = {
  execOptions: {}, //Options passed to the child_process spawn executor
  logProcess: false, //Bky default a console log is being printed
  customMsg: 'run-git-command'// A custom message to be printed to the console
}

export default function getLog() {
  return execGitCmd([gitCommand.toString().trim()], execOptions)
    .then((results) => "Command ran successfully")
    .catch((error) => "Command execution failed");
}

export async function gitinfo(ctx: Context, next: () => Promise<any>) {
  ctx.body = {
    app: "interview",
    git_log: getLog()
  };
  await next();
}
