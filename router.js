function route(handle, pathname) {
  console.log('________' + pathname)
  if (typeof handle[pathname] === 'function') {
    handle[pathname]
  } else {
    console.log('__s______' + pathname)
  }
}
function start(pathname) {
  console.log('________' + pathname)
}

function upload(pathname) {
  console.log('________' + pathname)
}

exports.start = start
exports.upload = upload
