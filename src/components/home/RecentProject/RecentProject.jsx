import React, { useEffect, useRef, useState } from 'react';
import ProjectCard from '../../projects/ProjectCard/ProjectCard';
import {
  NextButton,
  PrevButton,
  RecentProjectBlock,
  RecentProjectList,
  StyledLink,
} from './RecentProject.styles';

const RecentProject = ({ projects }) => {
  const viewport = useRef(null);
  const target = useRef(null);

  const [index, setIndex] = useState(0);

  useEffect(() => {
    console.log(index);
  }, [index]);

  useEffect(() => {
    console.log('hi');
    let options = {
      root: viewport.current,
      threshold: 0,
    };

    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log(entry);
        }
        if (!entry.isIntersecting) {
          return;
        }

        observer.unobserve(entry.target); // 기존 타겟을 unobserve 하고
        observer.observe(target.current); // 데이터 변경된 새로운 카드 타겟을 observe 합니다.
      });
    };

    const io = new IntersectionObserver(handleIntersection, options);

    if (target.current) {
      io.observe(target.current); // target
    }

    return () => io && io.disconnect();
  }, [target, viewport]);

  const handleClickPrev = () => {
    setIndex(index - 1);
    const targetCard = document.querySelector(
      `#recent-project-card${index - 1}`,
    );
    targetCard.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'start',
    });
  };
  const handleClickNext = () => {
    setIndex(index + 1);
    const targetCard = document.querySelector(
      `#recent-project-card${index + 1}`,
    );
    targetCard.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'start',
    });
  };

  return (
    <>
      <RecentProjectBlock>
        {index > 0 && (
          <PrevButton index={index} onClick={handleClickPrev}>
            <i className="fas fa-chevron-left"></i>
          </PrevButton>
        )}
        <h3 className="project_container_title">
          <StyledLink to="/projects">Recent Projects</StyledLink>
        </h3>
        <RecentProjectList className="project_card_container" ref={viewport}>
          {projects.map((project, idx) => {
            let lastEl = index === 6;
            return (
              <div
                key={project.id}
                id={`recent-project-card${idx}`}
                // ref={lastEl ? target : null}
                ref={target}
              >
                <ProjectCard project={project} />
                <p>{idx}</p>
              </div>
            );
          })}
        </RecentProjectList>
        {index < 6 && (
          <NextButton index={index} onClick={handleClickNext}>
            <i className="fas fa-chevron-right"></i>
          </NextButton>
        )}
      </RecentProjectBlock>
    </>
  );
};

export default RecentProject;
