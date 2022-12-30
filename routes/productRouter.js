// import controllers review, products
const productController = require('../controllers/productController.js')
const commentController = require('../controllers/commentController.js')


// router
const router = require('express').Router()


// use routers
router.post('/addProduct', productController.addProduct)

router.get('/allProducts', productController.getAllProducts)



// Comment Url and Controller

router.get('/allComments', commentController.getAllComments)
router.post('/addComment/:id', commentController.addComment)

// get product Comments
router.get('/getProductComments/:id', productController.getProductComments)




// Products router
router.get('/:id', productController.getOneProduct)

router.put('/:id', productController.updateProduct)

router.delete('/:id', productController.deleteProduct)

module.exports = router