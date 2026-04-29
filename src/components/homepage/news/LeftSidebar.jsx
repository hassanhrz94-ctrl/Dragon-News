import Link from 'next/link';
import React from 'react';

const LeftSidebar = ({categories, activeId}) => {
    return (
        <div>
           
<h2 className='font-bold text-2xl'>All categories</h2>
<ul>
  {
    categories.news_category.map(category=>{
      return <li key={category.category_id} className={`${activeId === category.category_id &&"bg-blue-400 text-white"  }  rounded-md font-bold text-center text-xl mt-6`}>
       <Link href={`/category/${category.category_id}`} className='p-2 block '>{category.category_name}</Link>
      </li>
    })
  }
</ul>
</div>

    
    );
};

export default LeftSidebar;