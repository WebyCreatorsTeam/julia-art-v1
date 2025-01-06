import { getCategories } from '@/app/lib/dashboard/data/category/category.data'
import React from 'react'
import WhiteSection from '../WhiteSection/WhiteSection'
import CategoryTitle from './CategoryTitle'

interface ICategory {
    _id: string,
    type: string,
    img: string
    subCategory: Array<{
        title: string,
        img: string,
        _id: string
    }>
}
const CategoryList = async () => {
    const categories: Array<ICategory> = await getCategories()

    console.log(categories)
    return (
        <>
            <h1>Категрии</h1>
            <section className='categories'>
                {categories && categories.map((category, i: number) => (
                    <WhiteSection key={i}>
                        <CategoryTitle categoryTitle={category.type} categoryImg={category.img}/>
                        {category.subCategory.map((subCategory, i: number) => (
                            <div key={i}>{subCategory.title}</div>
                          
                        ))}
                    </WhiteSection>
                ))}
            </section>
        </>
    )
}

export default CategoryList
// // <MainBackGroung key={i}>
//     // <CategoryItem category={category}/>
//     {category.subCategory.map((subCategory, i: number) => (
//         <ListItem key={i} userList={false} category={subCategory} />
//     ))}
//     // <AddBtn link={true} linkText="Добавить Категорию" href={`/dashboard/category/${decodeURIComponent(decodeURIComponent(category.type).replaceAll(" ", "-"))}/new-sub-category`} />
// // </MainBackGroung>