import { SMTPServer } from "smtp-server";

const server = new SMTPServer({
  allowInsecureAuth: true,
  authOptional: true,
  onConnect(session, cb) {
    console.log("onConnect: ", session.id);
    cb();
  },
  onMailFrom(address, session, cb) {
    console.log("Mail From: ", address.address, session.id);
    cb();
  },
  onRcptTo(address, session, cb) {
    console.log("On Recpt To: ", address.address, session.id);
    cb();
  },
  onData(stream, session, cb) {
    stream.pipe(process.stdout);
    stream.on("data", (data) => {
      console.log("onData: ", data.toString());
    });
    stream.on("end", cb);
  },
});

server.listen(25, () => {
  console.log("SMTP Server Listening on 25!");
});

