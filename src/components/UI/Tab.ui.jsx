import React from 'react';
import PropTypes from 'prop-types';

function Tab({ tab, handleTabChange, children }) {
  return (
    <nav className="flex text-sm font-medium border-b border-gray-100">
      {tab.map((currentTab) => (
        <div className="inline-flex">
          <button
            className="p-3 md:p-4 -mb-px border-b border-current text-cyan-500"
            onClick={(e) => handleTabChange(e, currentTab.id)}
            key={currentTab.id}
            type="button"
          >
            <div className="flex justify-center">{children}</div>
            {currentTab.title}
          </button>
        </div>
      ))}
    </nav>
  );
}
Tab.propTypes = {
  tab: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired
  }).isRequired,
  handleTabChange: PropTypes.func.isRequired
};
export default Tab;
