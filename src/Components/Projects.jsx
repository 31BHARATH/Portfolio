import { Card } from "flowbite-react";
import { Link } from "react-router-dom";
export default function Projects() {
  return (
    <>
      <Card href="#" className="w-[500px] bg-[#262626] border-none ">
        <h5 className="text-2xl font-normal tracking-tight  text-white dark:text-white">
          Employee Management System
        </h5>
        <p className="font-normal text-white text-sm dark:text-gray-400">
          Developed an Employee Management System utilizing Spring MVC and
          Hibernate frameworks, seamlessly integrating with MySQL for efficient
          data storage and retrieval. Implemented an intuitive front-end
          interface using HTML and CSS, enhancing user experience and
          facilitating streamlined employee data management.
        </p>
        <Link>Learn more....</Link>
      </Card>
      <Card className="w-[500px] bg-[#262626] border-none ">
        <h5 className="text-2xl font-normal tracking-tight  text-white dark:text-white">
          Course Management System
        </h5>
        <p className="font-normal text-white text-sm dark:text-gray-400">
          Designed and implemented a Course Management System with Spring Boot
          and Hibernate, ensuring efficient data management and retrieval from
          MySQL database. Employed Postman for comprehensive API testing,
          ensuring robust functionality and seamless integration.
        </p>
        <Link>Learn more....</Link>
      </Card>
      <Card href="#" className="w-[500px] bg-[#262626] border-none ">
        <h5 className="text-2xl font-normal tracking-tight  text-white dark:text-white">
          Guess the secret number
        </h5>
        <p className="font-normal text-white text-sm dark:text-gray-400">
          Developed an interactive "Guess the Secret Number" game using HTML,
          CSS, and JavaScript, leveraging DOM techniques for dynamic user
          interface updates. Demonstrated proficiency in front-end development
          by creating an engaging and responsive gaming experience. Utilized
          JavaScript to handle user input, validate guesses, and dynamically
          update the DOM for an interactive web-based game.
        </p>
        <Link>Learn more....</Link>
      </Card>
    </>
  );
}
