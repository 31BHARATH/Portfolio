import { Tabs } from "flowbite-react";
export default function CustomTabs() {
  return (
    <Tabs
      aria-label="Tabs with underline"
      style="underline"
      className="border-none"
    >
      <Tabs.Item active title="Skills">
        <h3 className="text-pink-600">PROGRAMMING LANGUAGE</h3>
        <h2>JAVA.</h2>
        <h3 className="text-pink-600">FRONT-END TECHNOLOGIES</h3>
        <h2>HTML,CSS and JAVASCRIPT.</h2>
        <h3 className="text-pink-600">JEE</h3>
        <h2>JDBC and SERVLETS.</h2>
        <h3 className="text-pink-600">FRAMEWORKS</h3>
        <h2>HIBERNATE,SPRING-CORE,SPRING-MVC and SPRING-BOOT.</h2>
        <h3 className="text-pink-600">DATABASE</h3>
        <h2>MYSQL.</h2>
      </Tabs.Item>
      <Tabs.Item title="Training">
        <h3 className="text-pink-600">EXCELR (AUG23 - MAR23)</h3>
        <h2>FULL STACK JAVA DEVELOPER</h2>
      </Tabs.Item>
      <Tabs.Item title="Education">
        <h3 className="text-pink-600">MAHARAJA INSTITUTE OF TECHNOLOGY MYSORE (2019 - 2023)</h3>
        <h2>B.E IN INFORMATION SCIENCE</h2>
      </Tabs.Item>
    </Tabs>
  );
}
