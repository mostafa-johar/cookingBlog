const router = createRouter()
import BlogModel from '~/server/plugins/models/Blog.model';
import CountryFoodModel from '~/server/plugins/models/CountryFood.model';
import path from 'path'
import fs from 'fs'

// -- Get AllGategories
router.get('/home', defineEventHandler(async (event) => {

    try {
        const blog = await BlogModel.find({})

        return { all: blog }


    } catch (err) {
        return { errors: err }
    }

}))



// -- Get explore-latest
router.get('/explore-latest', defineEventHandler(async (event) => {

    try {
        const blog = await BlogModel.find({}).sort({ _id: -1 }).limit(5)
        return { all: blog }
    } catch (err) {
        return { errors: err }
    }
}))

// -- Get explore-random
router.get('/explore-random', defineEventHandler(async () => {
    try {
        const count = await BlogModel.find({}).countDocuments()
        const random = Math.floor(count * Math.random())
        const blog = await BlogModel.findOne({}).skip(random).exec()

        return { all: blog }
    } catch (err) {
        return { errors: err }
    }
}))

// -- Get view-all
router.get('/view-all', defineEventHandler(async () => {
    try {
        const countryFood = await CountryFoodModel.find({})
        return { all: countryFood }
    } catch (err) {
        return { errors: err }
    }

}))

// -- Post Recipe-form
router.post('/home', defineEventHandler(async (event) => {
    const files = await readMultipartFormData(event)
    interface formData { 
        title: string, 
        description: string, 
        ingredients: string[],
         category: string, 
         email: string, 
         slug: string,
          img?: string , 
          source: string
         }
    const formData: formData = {
        title: '',
        description: '',
        ingredients: [],
        category: '',
        email: '',
        slug: '',
        img: '',
        source: ''
    }
    files?.forEach((el) => {

        if (el.name === 'file') {
            const pathFile = path.join(process.cwd(), 'public', el.filename as string)
            fs.writeFileSync(pathFile, el.data)
            formData.img = el.filename
        }
        else {
            if (el.name === 'ingredients') {
                formData[el.name].push(el.data.toString('utf-8'))
            } else {
                formData[el.name] = el.data.toString('utf-8')
            }
        }
    })

    try {
        const blog = await BlogModel.create({
            title: formData.title,
            description: formData.description,
            Source: formData.source,
            ingredients: formData.ingredients,
            category: formData.category,
            email: formData.email,
            slug: formData.slug,
            img: formData.img,

        })
        return { messege: blog }
    } catch (err) {
        return { errors: err }
    }
    return {
        files
    }
}))


export default useBase('/api/', router.handler)