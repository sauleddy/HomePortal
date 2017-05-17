import compose from 'koa-compose'
import Router from 'koa-router'

const router = new Router({prefix: '/auth'})

router.post('/login', async function(ctx, next) {
	console.log(ctx.request);

  console.log(ctx.request.body.email);
  console.log(ctx.request.body.password);

	/*User.findOne({
    email: req.body.email
  }, (err, user) => {

    if (err) throw err;

    if (!user) {
      res.json({ success: false, message: 'Authentication failed. User not found.' });
    } else if (user) {
      // check if password matches
      if (user.password != req.body.password) {
        res.json({ success: false, message: 'Authentication failed. Wrong password.' });
      } else {
        // if user is found and password is right
        // create a token
        const token = jwt.sign({ email: user.email }, app.get('superSecret'), {
          expiresIn: 60 * 60 * 24 // expires in 24 hours
        });
        // return the information including token as JSON
        res.json({
          success: true,
          message: 'Enjoy your token!',
          token: token,
          userId: user._id
        });
      }   
    }
  });*/

	//ctx.body = String(Math.PI);
});

router.get('/logout', async function(ctx, next) {
	ctx.body = String(Math.PI - 2);
});

export default router
