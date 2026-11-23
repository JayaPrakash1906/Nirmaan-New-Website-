import React from "react";
import { FaChevronRight } from "react-icons/fa6";

/**
 * @param {{ title: string, trail?: { label: string, href?: string }[] }} props
 */
const PageHeader = ({ title, trail = [{ label: "Home", href: "/" }] }) => (
  <div className="page-header">
    <div className="site-container py-0">
      <nav className="flex flex-wrap items-center gap-1.5 text-sm text-gray-600 mb-2 pt-4" aria-label="Breadcrumb">
        {trail.map((item, i) => (
          <React.Fragment key={`${item.label}-${i}`}>
            {i > 0 && <FaChevronRight className="text-gray-400 shrink-0" size={10} />}
            {item.href ? (
              <a href={item.href} className="hover:text-green-800 hover:underline font-medium">
                {item.label}
              </a>
            ) : (
              <span className="text-gray-900 font-semibold">{item.label}</span>
            )}
          </React.Fragment>
        ))}
      </nav>
      <h1 className="heading-page">{title}</h1>
    </div>
  </div>
);

export default PageHeader;