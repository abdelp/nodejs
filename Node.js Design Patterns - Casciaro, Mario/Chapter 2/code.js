const spiderLinks = (currentUrl, body, nesting, callback) => {
  if(nesting === 0) return process.nextTick(callback);

  const links = utilities.getPageLinks(currentUrl, body);

  const iterate = (index) => {
    if(index === links.length) return callback();
 
    spider(links[index], nesting - 1, (err) => {
      if(err) return callback(err);
      iterate(index + 1);
    });
  }

  iterate(0);
 }

 function iterate(index) {
  if(index === tasks.length) {
  return finish();
  }
  var task = tasks[index];
  task(function() {
  iterate(index + 1);
  });
 }
 function finish() {
  //iteration completed
 }
 iterate(0);

//==========================

function spiderLinks(currentUrl, body, nesting, callback) {
  if(nesting === 0) return process.nextTick(callback);

  const links = utilities.getPageLinks(currentUrl, body);
  if(links.length === 0) return process.nextTick(callback);

  const completed = 0, errored = false;
 
  const done = (err) => {
    if(err) {
      errored = true;
      return callback(err);
    }

    if(++completed === links.length && !errored) return callback();
  }

  links.forEach((link) => spider(link, nesting - 1, done));
 }