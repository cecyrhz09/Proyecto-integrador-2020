module.exports = (app, passport) => {

	// index routes
	app.get('/', (req, res) => {
		res.render('index');
	});

	app.get('/ubicacion', (req, res) => {
		res.render('ubicacion.ejs');
	});

	app.get('/interfazUsuario', (req, res) => {
		res.render('interfazUsuario.ejs');
	});

	app.get('/servicio', (req, res) => {
		res.render('servicio.ejs');
	});

	app.get('/Estadoservicio', (req, res) => {
		res.render('estadoServicio.ejs');
	});

	app.get('/misServicios', (req, res) => {
		res.render('misServicios.ejs');
	});

	app.get('/proceso', (req, res) => {
		res.render('proceso.ejs');
	});

	app.get('/concluido', (req, res) => {
		res.render('concluido.ejs');
	});

	

	

	 
	//login view
	app.get('/login', (req, res) => {
		res.render('login.ejs', {
			message: req.flash('loginMessage')
		});
	});

	app.post('/login', passport.authenticate('local-login', {
		successRedirect: '/profile',
		failureRedirect: '/login',
		failureFlash: true
	}));

	// signup view
	app.get('/signup', (req, res) => {
		res.render('signup', {
			message: req.flash('signupMessage')
		});
	});

	app.post('/signup', passport.authenticate('local-signup', {
		successRedirect: '/profile',
		failureRedirect: '/signup',
		failureFlash: true // allow flash messages
	}));

	//profile view
	app.get('/profile', isLoggedIn, (req, res) => {
		res.render('profile', {
			user: req.user
		});
	});

	// logout
	app.get('/logout', (req, res) => {
		req.logout();
		res.redirect('/');
	});
};

function isLoggedIn (req, res, next) {
	if (req.isAuthenticated()) {
		return next();
	}

	res.redirect('/');
}
