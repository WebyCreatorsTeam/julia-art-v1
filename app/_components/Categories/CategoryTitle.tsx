import Image from 'next/image'
import React from 'react'

const CategoryTitle = ({ categoryTitle, categoryImg }: { categoryTitle: string, categoryImg: string }) => {
    return (
        <div>
            <Image src={categoryImg} alt={categoryTitle} width={60} height={60} />
            <h2>{categoryTitle}</h2>
            <div>[редактировать]</div>
            <div>[удалить]</div>
            <hr />
        </div>
    )
}

export default CategoryTitle