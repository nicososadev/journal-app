import cloudinary from 'cloudinary'
import { fileUpload } from '../../helpers/fileUpload'

cloudinary.config({ 
    cloud_name: 'dsselcnmz', 
    api_key: '558449712783572', 
    api_secret: 'X_Y8tUxO9mvsf2WcrG1GDJK72vA' 
});

describe('Pruebas en fileUpload', () => {
    
    test('Debe cargar un archivo y retornar el URL', async(done) => {
        
        const response = await fetch('https://image.jimcdn.com/app/cms/image/transf/none/path/sf6e56563824ffad7/image/i66b092a39c521523/version/1575147620/image.jpg')

        const blob = await response.blob()

        const file = new File([blob],'img.jpg')

        const url = await fileUpload( file )

        // Borrado de imagen de prueba en Cloudinary

        const segments = url.split('/')

        const imageId = segments[ segments.length -1 ].replace('.jpg','')

        cloudinary.v2.api.delete_resources(imageId, {}, () => {
            done()
        })

    })
    
})
