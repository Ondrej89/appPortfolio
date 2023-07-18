"use client"
import { ProjectInterface } from "@/common.types"
import Categories from "@/components/Categories";
// import LoadMore from "@/components/LoadMore";
import ProjectCard from "@/components/ProjectCard";
import { fetchAllProjects } from "@/lib/actions"

import { useEffect } from 'react';


type ProjectSearch = {
  projectSearch: {
    edges: {node: ProjectInterface}[];
    pageIngo:{
      hasPreviousPage: boolean;
      hasNextPage: boolean;
      startCursor: string;
      endCursor: string;
    }
  }
}

type searchParams = {
  category?: string
}

type Props = {
  searchParams: searchParams
}

const Home = async ({searchParams:{category}}:Props) => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const { search } = window.location;
      const categoryParam = 'category=Frontend';
      const hasCategoryParam = search.includes(categoryParam);

      if (!hasCategoryParam) {
        const newURL = `${window.location.origin}/?${categoryParam}${search}`;
        window.location.href = newURL;
      }
    }
  }, []);

  const data = await fetchAllProjects(category) as ProjectSearch

  const projectsToDisplay = data?.projectSearch?.edges || [];
  if(projectsToDisplay.length === 0) {
    return(
      <section className="flexStart flex-cpl paddings">
        <Categories/>
            
      </section>
    )
  }

  // export const dynamic = 'force-dynamic';
  // export const dynamicParams = true;
  // export const revalidate = 0;

  return (
    <section className='flexStart flex-col paddings mb-16'>
      <Categories/>
      <section className="projects-grid">
        {projectsToDisplay.map(({node}:{node:ProjectInterface})=>(
          <ProjectCard
          key={node?.id}
          id={node?.id}
          image={node?.image}
          title={node?.title}
          name={node?.createdBy.name}
          avatarUrl={node?.createdBy.avatarUrl}
          userId={node?.createdBy?.id} 
          />
        ))}
      </section>
      {/* <LoadMore 
       startCursor={`${data?.projectSearch?.pageInfo?.startCursor}`} 
       endCursor={data?.projectSearch?.pageInfo?.endCursor} 
       hasPreviousPage={data?.projectSearch?.pageInfo?.hasPreviousPage} 
       hasNextPage={data?.projectSearch?.pageInfo.hasNextPage}
      /> */}
    </section>
  )
}

export default Home