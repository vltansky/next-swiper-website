import clsx from "clsx";
import { Fragment } from "react";

export default function TableOfContents({ tableOfContents, currentSection }) {
  return (
    <ul className="overflow-x-hidden text-gray-500">
      {tableOfContents.map((section) => {
        let sectionIsActive =
          currentSection === section.slug ||
          section.children.findIndex(({ slug }) => slug === currentSection) >
            -1;

        return (
          <Fragment key={section.slug}>
            <li>
              <a
                href={`#${section.slug}`}
                className={clsx(
                  "block py-1 transition-colors duration-200 text-gray-900 hover:text-primary font-medium",
                  {
                    "text-primary": sectionIsActive,
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
                      "block py-1 transition-colors duration-200 text-gray-900 hover:text-primary",
                      {
                        "text-primary": subsectionIsActive,
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
