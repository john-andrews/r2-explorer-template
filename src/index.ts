import { R2Explorer } from "r2-explorer";

export default R2Explorer({
  // Set to false to allow users to upload files
  readonly: false,
  // Learn more how to secure your R2 Explorer instance:
  // https://r2explorer.com/getting-started/security/
  // cfAccessTeamName: "my-team-name",
  basicAuth: [{
    username: 'john',
    password: 'Ioi8(Y09hw)&%*776'
  },{
    username: 'john43',
    password: 'ppnH*08h209hSaarr@$5'
  }]
});
