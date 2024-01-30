import { useEffect, useState } from "react";
import { HashLoader } from "react-spinners";
import { FaGithub } from "react-icons/fa";
import { IoMdStar } from "react-icons/io";
import { HiMiniCodeBracket } from "react-icons/hi2";

import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import styles from "../styles";

type reposioryData = {
  repoName: string;
  stars: number;
  language?: string;
  link: string;
};

export const Project = () => {
  // Use to fetch the name of repos from github directly using github username
  // public github api: "https://api.github.com/users/<username>/repos"
  // extract reporName, stars and language used in repo and sort in order of stars.
  const [respositores, setRepositories] = useState<reposioryData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchRepositoryName = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/sahilsinggh/repos"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch repositories");
        }
        const reposList = await response.json();
        const repositoryNames = reposList.map((repo: any) => ({
          repoName: repo.name,
          stars: repo.stargazers_count,
          language: repo.language,
          link: `https://github.com/${repo.full_name}`,
        }));
        repositoryNames.sort(
          (a: reposioryData, b: reposioryData) => b.stars - a.stars
        );
        console.log(repositoryNames);
        setRepositories(repositoryNames);
      } catch (error) {
        console.log("Error fetching repository name: ", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchRepositoryName();
  }, []);

  return (
    <section id="project" className="sm:mt-16 mt-5 pb-16">
      <h4
        className={`${styles.heading2} font-poppins font-semibold xs:text-[40px] text-[30px] text-center text-gradient pb-4`}
      >
        Projects
      </h4>
      {isLoading && (
        <div className="flex justify-center items-center w-full sm:p-16 p-10">
          <HashLoader color="#5ce1e6" loading={isLoading} />
        </div>
      )}
      <div className="flex flex-row justify-start overflow-auto w-full pb-4 scrollbar">
        {respositores.map((repository: reposioryData) => (
          <RepositoryCard key={repository.repoName} {...repository} />
        ))}
      </div>
    </section>
  );
};

const RepositoryCard = (repository: reposioryData) => {
  return (
    <Card
      className="mt-6 mr-8 bg-inherit border-[1px] border-[#3F3E45]"
      placeholder="card"
    >
      <CardBody className="z-[5] w-[350px]" placeholder="card-body">
        {/* <div className="absolute z[0] top-10 right-10 w-[60%] h-[70%] rounded-full small_pink__graident" /> */}
        <div className="absolute z-[0] w-[45%] h-[35%] top-20 right-16 small_pink__graident" />
        <div className="absolute z-[0] w-[10%] h-[20%] right-20 bottom-20 small_blue__gradient" />
        <FaGithub className="text-white w-[42px] h-[42px] object-contain mb-4 z-[5]" />
        <Typography
          variant="h5"
          className="pl-2 pt-5 text-gradient mb-2 z-[5]"
          placeholder="typography"
        >
          {repository.repoName}
        </Typography>
        <Typography placeholder="typography">
          <div className="flex flex-row z[5]">
            <div className="m-5">
              <HiMiniCodeBracket className="text-white w-[25px] h-[25px] object-contain" />
            </div>
            <div className="mt-5">
              <p className={`text-white`}>{repository.language}</p>
            </div>
          </div>
          <div className="flex flex-row z[5]">
            <div className="ml-5">
              <IoMdStar className="text-white w-[25px] h-[25px] object-contain" />
            </div>
            <div className="ml-5">
              <p className={`text-white`}>{repository.stars}</p>
            </div>
          </div>
        </Typography>
      </CardBody>
      <CardFooter className="pt-0" placeholder="card-footer">
        <a href={repository.link} target="_blank" className="inline-block">
          <Button
            size="sm"
            variant="text"
            className="flex items-center gap-2 text-white"
            placeholder="button"
          >
            <p className="text-[17px]"> Visit Project </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </Button>
        </a>
      </CardFooter>
    </Card>
  );
};
