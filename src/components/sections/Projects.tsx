import styles from "@styles/projects.module.css";
import { portfolioData } from "@lib/data/portfolio.data.ts";
import IconFolder from "@components/icons/folder.tsx";
import IconExternal from "@components/icons/external.tsx";
import IconGitHub from "@components/icons/github.tsx";
import { useState } from "react";
import AnimatedComponent from "@components/sections/AnimatedComponent.tsx";
import { ProjectItem } from "@lib/models/project.model.ts";
import { Button } from '@components/ui/Button';
import { ButtonVariant, ButtonShape } from '@lib/enums/button.enum';

function Projects() {
    const [otherProjectsDetails, setOtherProjectsDetails] = useState({
        max: 13,
        btnName: 'Show More',
        showAll: false,
    });

    const show = (name: string) => {
        if (name === 'less') {
            setOtherProjectsDetails((prev) => ({
                ...prev,
                btnName: 'Show More',
                showAll: false,
            }));
        } else {
            setOtherProjectsDetails((prev) => ({
                ...prev,
                btnName: 'Show Less',
                showAll: true,
            }));
        }
    };

    return (
        <div className={styles.projects}>
            <div className={styles.sectionHeading}>
                <h3 className={styles.sectionTitle}>
                    <span className={styles.sectionNumber}>03.</span> {portfolioData.projects.title}
                </h3>
                <hr className={styles.sectionHeadingHr} />
            </div>

            {portfolioData.projects.list
                .slice(0, portfolioData.projects.priority)
                .map((project, index) =>
                    index % 2 === 0
                        ? RenderProject("right", index, project)
                        : RenderProject("left", index, project)
                )}

            {portfolioData.projects.list.length > portfolioData.projects.priority && (
                <div className={styles.otherProjectsWrapper}>
                    <div className={styles.otherProjectsHeaderContainer}>
                        <h3 className={styles.otherProjectsHeaderTitle}>Other Noteworthy Projects</h3>
                        <p className={styles.otherProjectsHeaderSubtitle}>
                            <strong>View Complete List of Projects/Codes</strong>
                        </p>
                        <div className={styles.otherProjectsContainer}>
                            {portfolioData.projects.list
                                .slice(
                                    portfolioData.projects.priority - 1,
                                    otherProjectsDetails.showAll
                                        ? portfolioData.projects.list.length
                                        : otherProjectsDetails.max + portfolioData.projects.priority - 1
                                )
                                .map((project, index) => RenderOtherProject(index, project))}
                        </div>
                    </div>

                    {portfolioData.projects.list.length > otherProjectsDetails.max && (
                        <div className={styles.showMoreContainer}>
                            <Button
                                variant={ButtonVariant.OUTLINE}
                                shape={ButtonShape.RECTANGLE}
                                onClick={() => show(otherProjectsDetails.btnName.includes('Less') ? 'less' : 'more')}
                            >
                                {otherProjectsDetails.btnName}
                            </Button>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

const RenderProject = (
    orientation: string,
    index: number,
    project: ProjectItem
) => {
    const onLinkClick = (link: string) => {
        window.open(link, "_blank", "noopener,noreferrer");
    };

    return (
        <div key={index}>
            {orientation === "right" && (
                <AnimatedComponent>
                    <div className={styles.projectsContent}>
                        <div className={styles.projectsRowRight}>
                            <div
                                className={
                                    project.imageType === "app"
                                        ? styles.projectsAppImageContainer
                                        : styles.projectsImageContainer
                                }
                            >
                                <img src={project.image} alt={project.title} />
                            </div>
                            <div className={styles.projectsRightContent}>
                                <p className={styles.projectSubtitleRight}>
                                    <strong>{project.subTitle}</strong>
                                </p>
                                <h4 className={styles.projectTitleRight}>{project.title}</h4>

                                <div className={styles.projectsContentRightDescription}>
                                    <p className={styles.projectDescriptionRight}>{project.description}</p>
                                </div>
                                <div className={styles.projectLanguagesRight}>
                                    {project.languages.map((language: string, idx: number) => (
                                        <p key={idx} className={styles.languageText}>
                                            <strong>{language}</strong>
                                        </p>
                                    ))}
                                </div>
                                <div className={styles.projectLinksRight}>
                                    <IconGitHub
                                        onClick={() => onLinkClick(project.githubCodeUrl)}
                                        className={styles.githubIcon}
                                    />
                                    {project.externalUrl !== "" && (
                                        <IconExternal
                                            onClick={() => onLinkClick(project.externalUrl)}
                                            className={styles.externalIcon}
                                        />
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </AnimatedComponent>
            )}
            {orientation === "left" && (
                <AnimatedComponent>
                    <div className={styles.projectsContent}>
                        <div className={styles.projectsRowLeft}>
                            <div className={styles.projectsLeftContent}>
                                <p className={styles.projectSubtitleLeft}>
                                    <strong>{project.subTitle}</strong>
                                </p>
                                <h4 className={styles.projectTitleLeft}>{project.title}</h4>
                                <div className={styles.projectsContentLeftDescription}>
                                    <p className={styles.projectDescriptionLeft}>{project.description}</p>
                                </div>
                                <div className={styles.projectLanguagesLeft}>
                                    {project.languages.map((language: string, idx: number) => (
                                        <p key={idx} className={styles.languageText}>
                                            <strong>{language}</strong>
                                        </p>
                                    ))}
                                </div>
                                <div className={styles.projectLinksLeft}>
                                    <IconGitHub
                                        onClick={() => onLinkClick(project.githubCodeUrl)}
                                        className={styles.githubIcon}
                                    />
                                    {project.externalUrl !== "" && (
                                        <IconExternal
                                            onClick={() => onLinkClick(project.externalUrl)}
                                            className={styles.externalIcon}
                                        />
                                    )}
                                </div>
                            </div>
                            <div
                                className={
                                    project.imageType === "app"
                                        ? styles.projectsAppImageContainer
                                        : styles.projectsImageContainer
                                }
                            >
                                <img src={project.image} alt={project.title} />
                            </div>
                        </div>
                    </div>
                </AnimatedComponent>
            )}
        </div>
    );
};

const RenderOtherProject = (index: number, project: ProjectItem) => {
    const onLinkClick = (link: string) => {
        window.open(link, "_blank", "noopener,noreferrer");
    };

    return (
        <div key={index} className={styles.otherContainer}>
            <AnimatedComponent>
                <div className={styles.otherTopRow}>
                    <IconFolder className={styles.folderIcon} />
                    <div className={styles.otherLinksContainer}>
                        <IconGitHub
                            onClick={() => onLinkClick(project.githubCodeUrl)}
                            className={styles.githubIcon}
                        />
                        {project.externalUrl !== "" && (
                            <IconExternal
                                onClick={() => onLinkClick(project.externalUrl)}
                                className={styles.externalIcon}
                            />
                        )}
                    </div>
                </div>
                <h5 className={styles.otherTitle}>{project.title}</h5>
                <p className={styles.otherDescription}>{project.description}</p>
                <div className={styles.otherLanguagesContainer}>
                    {project.languages.map((language: string, idx: number) => (
                        <p key={idx} className={styles.languageText}>
                            <strong>{language}</strong>
                        </p>
                    ))}
                </div>
            </AnimatedComponent>
        </div>
    );
};

export default Projects;