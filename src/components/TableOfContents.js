import clsx from "clsx";
import { Fragment } from "react";

export default function TableOfContents({ tableOfContents, currentSection }) {
  return (
    <ul className="overflow-x-hidden text-gray-500">
      {tableOfContents.map((section) => {
        let sectionIsActive = currentSection === section.slug;
        let childSectionIsActive =
          section.children.findIndex(({ slug }) => slug === currentSection) >
          -1;

        return (
          <Fragment key={section.slug}>
            <li>
              <a
                href={`#${section.slug}`}
                className={clsx(
                  "block py-1 px-2 transition-colors duration-100 text-gray-900 hover:text-primary hover:no-underline font-medium hover:bg-primary hover:bg-opacity-10 rounded",
                  {
                    "text-primary": sectionIsActive || childSectionIsActive,
                    "bg-primary": sectionIsActive,
                    "bg-opacity-10": sectionIsActive,
                  }
                )}
              >
                {section.title}
              </a>
            </li>
            {section.children.map((subsection) => {
              let subsectionIsActive = currentSection === subsection.slug;

              return (
                <li className="ml-2" key={subsection.slug}>
                  <a
                    href={`#${subsection.slug}`}
                    className={clsx(
                      "block py-1 px-2 transition-colors duration-100 text-gray-900 hover:text-primary hover:no-underline hover:bg-primary hover:bg-opacity-10 rounded",
                      {
                        "text-primary": subsectionIsActive,
                        "bg-primary": subsectionIsActive,
                        "bg-opacity-10": subsectionIsActive,
                      }
                    )}
                  >
                    {subsection.title}
                  </a>
                </li>
              );
            })}
          </Fragment>
        );
      })}
    </ul>
  );
}
