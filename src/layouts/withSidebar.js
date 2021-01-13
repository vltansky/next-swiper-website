import { useState, useEffect, createContext, useCallback } from "react";
import PageHeader from "@/components/PageHeader";
import TableOfContents from "@/components/TableOfContents";
import Sponsors from "@/components/Sponsors";

export const ContentsContext = createContext();
function useTableOfContents(tableOfContents) {
  let [currentSection, setCurrentSection] = useState(tableOfContents[0]?.slug);
  let [headings, setHeadings] = useState([]);

  const registerHeading = useCallback((id, top) => {
    setHeadings((headings) => [
      ...headings.filter((h) => id !== h.id),
      { id, top },
    ]);
  }, []);

  const unregisterHeading = useCallback((id) => {
    setHeadings((headings) => headings.filter((h) => id !== h.id));
  }, []);

  useEffect(() => {
    if (tableOfContents.length === 0 || headings.length === 0) return;
    function onScroll() {
      let y = window.pageYOffset;
      let windowHeight = window.innerHeight;
      let sortedHeadings = headings.concat([]).sort((a, b) => a.top - b.top);
      if (y <= 0) {
        setCurrentSection(sortedHeadings[0].id);
        return;
      }
      if (y + windowHeight >= document.body.scrollHeight) {
        setCurrentSection(sortedHeadings[sortedHeadings.length - 1].id);
        return;
      }
      const middle = y + windowHeight / 2;
      let current = sortedHeadings[0].id;
      for (let i = 0; i < sortedHeadings.length; i++) {
        if (middle >= sortedHeadings[i].top) {
          current = sortedHeadings[i].id;
        }
      }
      setCurrentSection(current);
    }
    window.addEventListener("scroll", onScroll, {
      capture: true,
      passive: true,
    });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll, true);
  }, [headings, tableOfContents]);

  return { currentSection, registerHeading, unregisterHeading };
}

export function WithSidebarLayout({
  children,
  meta = {},
  classes,
  tableOfContents = [],
}) {
  const toc = [
    ...(classes
      ? [
          {
            title: "Default class reference",
            slug: "class-reference",
            children: [],
          },
        ]
      : []),
    ...tableOfContents,
  ];

  const {
    currentSection,
    registerHeading,
    unregisterHeading,
  } = useTableOfContents(toc);
  return (
    <div>
      <div id={meta.containerId} className="w-full flex">
        {toc.length > 0 && (
          <div className="hidden text-sm md:block flex-none w-64 mr-8 bg-gray-100">
            <div className="overflow-y-auto sticky top-0 px-4 max-h-screen">
              <Sponsors />
              <TableOfContents
                tableOfContents={toc}
                currentSection={currentSection}
              />
            </div>
          </div>
        )}
        <div className="max-w-none prose min-w-0 flex-auto px-4 sm:px-6 xl:px-8 pt-10 pb-24 lg:pb-16">
          {meta.title && (
            <PageHeader title={meta.title} description={meta.description} />
          )}
          <ContentsContext.Provider
            value={{ registerHeading, unregisterHeading }}
          >
            {children}
          </ContentsContext.Provider>
        </div>
      </div>
    </div>
  );
}
