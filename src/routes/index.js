const express = require('express');
const router = express.Router();
const passport = require('passport');
const Alumno = require('../models/alumnos');





//------Login

router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/signup', (req, res, next) => {
  res.render('signup');
});

router.post('/signup', passport.authenticate('local-signup', {
  successRedirect: '/profile',
  failureRedirect: '/signup',
  passReqToCallback: true
})); 

router.get('/signin', (req, res, next) => {
  res.render('signin');
});


router.post('/signin', passport.authenticate('local-signin', {
  successRedirect: '/escuela',
  failureRedirect: '/signin',
  passReqToCallback: true
}));

router.get('/logout', (req, res, next) => {
  req.logout();
  res.redirect('/');
});
/*
//todos las rutas debajo estaran dentro de la seguridad de las sessions
router.use((req, res, next)=>{
  isAuthenticated(req, res, next);
  next();
});
*/
router.get('/profile',isAuthenticated, (req, res, next) => {
  res.render('profile');
});

router.get('/products',isAuthenticated, (req, res, next) => {
  res.send('Pagina de Productos');
});


function isAuthenticated(req, res, next) {
  if(req.isAuthenticated()) {
    return next();
  }
  res.redirect('/')
}



//----Alumno
router.get('/escuela', async (req, res) => {
  const alumno = await Alumno.find();
  res.render('escuela', {
    alumno
  });
});

router.post('/add', async (req, res, next) => {
  const alumno = new Alumno(req.body);
  await alumno.save();
  res.redirect('/escuela');
});

router.get('/turn/:id', async (req, res, next) => {
  let { id } = req.params;
  const alumno = await Alumno.findById(id);
  alumno.status = !alumno.status;
  await alumno.save();
  res.redirect('/escuela');
});


router.get('/edit/:id', async (req, res, next) => {
  const alumno = await Alumno.findById(req.params.id);
  console.log(alumno)
  res.render('edit', { alumno });
});

router.post('/edit/:id', async (req, res, next) => {
  const { id } = req.params;
  await Alumno.updateOne({_id: id}, req.body);
  res.redirect('/escuela');
});

router.get('/delete/:id', async (req, res, next) => {
  let { id } = req.params;
  await Alumno.remove({_id: id});
  res.redirect('/escuela');
});

module.exports = router;