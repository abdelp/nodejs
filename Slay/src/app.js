import slay from 'slay';

const app = new slay.App(__dirname);
app.start(options, function (err) {
  if (err) { throw err; }
  app.log.info(`Listening on ${app.config.get('http')}`);
});

const App = module.exports = app;