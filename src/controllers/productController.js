const fs = require('fs');
const path = require('path'); 

/* En la constante "products" ya tienen los productos que están 
guardados en la carpeta Data como Json (un array de objetos literales) */
const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
/* const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8')); */

const controlador ={ //IMPORTANTE
    oferta:(req, res)=>{
            let listaOferta = [
                'lavadora',
                'licuadora',
                'destornillador'
            ];

            res.render('ofertas',{'listaOferta':listaOferta})
    },
    detail:(req, res)=>{//devolver un detalle de producto- Se usa GET
        let id = req.params.id //esto es lo que nos llega por parametro
        const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        let productFiltrado = products.find(producto=>{
            return producto.id == id;
        })
    
    /* console.log(productFiltrado) */

        res.render('detail',{producto:productFiltrado})
    }
}

        //exportamos el objeto literal con sus metodos
        module.exports = controlador;
