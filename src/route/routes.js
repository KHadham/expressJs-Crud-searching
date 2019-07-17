module.exports = (app) => {
    const controller = require('../controller/controller')

    //kodingan cors anjing yang bikin error
    app.use(function(req, res, next) {
      res.header("Access-Control-Allow-Origin","*");
      res.header("Access-Control-Allow-Methods","GET,POST,PUT,PATCH,DELETE,COPY,HEAD,OPTIONS,LINK,UNLINK,PURGE,LOCK,UNLOCK,PROPFIND,VIEW");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
      });

    // GET
    app.route ('/events').get (controller.readall)
    app.route ('/events/:param_id').get (controller.byid)
    app.route ('/src/:lokasi').get (controller.search)

    // POST
    app.route ('/events').post (controller.plus)

    // PATCH
    app.route ('/events/:param_edit').patch (controller.edit)

    // DELETE
    app.route ('/events/:param_kocok').delete (controller.erase)
    
}
