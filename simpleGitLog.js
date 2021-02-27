
import simpleGit, { SimpleGit } from 'simple-git';
const git: SimpleGit = simpleGit();

export default function getLog() {
  return git.log(['-p -25'])
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
