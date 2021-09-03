import ProjectCard from "./card";

function ProjectCards ({ data }) {
    return (
        <div>
            {
                data.map((projectElement) => {
                    return <ProjectCard
                        key={ projectElement.title }
                        title={ projectElement.title }
                        technology={ projectElement.technology }
                        description={ projectElement.decription }
                        githublink={ projectElement.githublink }
                        weblink={ projectElement.weblink }
                    />
                })
            }
        </div>
    );
}

export default ProjectCards;